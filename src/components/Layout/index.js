import Header from "./Header";
import './Layout.css'

function Layout(props) {
    return (
        <>
            <Header />
            <div className="app-container">
                {props.children}
            </div>
        </>

    );
}

export default Layout;