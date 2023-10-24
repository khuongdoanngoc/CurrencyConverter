import Header from "./Header";
import './Layout.css'

function Layout(props) {
    return (
        <>
            <Header />
            <div className="app-container mt-3">
                {props.children}
            </div>
        </>

    );
}

export default Layout;