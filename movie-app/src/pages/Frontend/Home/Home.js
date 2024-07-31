import Button from "@/components/Form/Button";
import { useDocumentTitle } from "@/hooks";
import { parseJwt } from "@/utils";

function Home() {
    useDocumentTitle('Home');

    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        const user = parseJwt(authToken);
        console.log(user);
    }

    return (
        <div>
            <h3>Home</h3>
            <Button className="btn btn-primary">1</Button>
        </div>
    );
}

export default Home;