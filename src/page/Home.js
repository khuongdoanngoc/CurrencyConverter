import "./Home.css";

// components import
import Title from "../components/Title";
import Calculator from "../components/Calculator";

function Home() {
    return (
        <div className="converter">
            <Title/>
            <Calculator/>
        </div>
    );
}

export default Home;
