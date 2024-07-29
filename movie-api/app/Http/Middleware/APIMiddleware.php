<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class APIMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        try {
            $jwt = JWTAuth::parseToken()->authenticate();
        } catch (JWTException $e) {
            $jwt = false;
        }
        if (Auth::check() || $jwt) {
            return $next($request);
        } else {
            return response('Unauthorized.', 401);
        }
    }
}
