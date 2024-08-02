<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Cores\BaseController;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends BaseController
{
    public function register(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6|confirmed',
            ]);

            if ($validator->fails()) {
                return $this->respondWithError($validator->errors()->first(), Response::HTTP_BAD_REQUEST);
            }

            $role = 'user';

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role' => $role,
            ]);

            $token = JWTAuth::customClaims(['role' => $user->role])->fromUser($user);

            return $this->respondWithSuccess(compact('user', 'token'), 'User registered successfully', Response::HTTP_CREATED);
        }catch (\Exception $e) {
            return $this->respondWithError($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remembered' => 'boolean',
        ]);

        if ($validator->fails()) {
            return $this->respondWithError($validator->errors()->first(), Response::HTTP_BAD_REQUEST);
        }

        $credentials = $request->only('email', 'password');
        $remembered = $request->input('remembered', false);

        try {
            if (!$token = JWTAuth::attempt($credentials, $remembered)) {
                return $this->respondWithError('Invalid Credentials', Response::HTTP_BAD_REQUEST);
            }

            $user = JWTAuth::setToken($token)->toUser();
            $token = JWTAuth::customClaims(['role' => $user->role])->fromUser($user);

            return $this->respondWithSuccess(compact('token'), 'User login successfully', Response::HTTP_OK);
        } catch (JWTException $e) {
            return $this->respondWithError($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function logout()
    {
        try {
            JWTAuth::invalidate(JWTAuth::getToken());
            return $this->respondWithSuccess([], 'Successfully logged out', Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getUser()
    {
        try {
            $user = Auth::user();

            if (!$user) {
                return $this->respondWithError('User not authenticated', Response::HTTP_UNAUTHORIZED);
            }

            return $this->respondWithSuccess($user, 'User details retrieved successfully', Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->respondWithError($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
