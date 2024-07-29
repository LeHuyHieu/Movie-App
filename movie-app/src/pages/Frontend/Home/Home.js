import Button from "@/components/Form/Button";
import { useDocumentTitle } from "@/hooks";

function Home() {
    useDocumentTitle('Home');

    return (
        <div>
            <h3>Home</h3>
            <Button className="btn btn-primary">1</Button>
        </div>
    );
}

export default Home;