import './Home.css'
import Dropdown from 'react-bootstrap/Dropdown';

function Home() {
    return (
        <div className='converter'>
            <div className="title">
                <h1>CURRENCY CONVERSION</h1>
            </div>
            <div className='calculator-container'>
                <div className='calculator-content'>
                    <div className='collector'>
                        <div className='form-group'>
                            <label>Amount of money</label>
                            <div className='input-group'>
                                <input className='custom-input' />
                                <Dropdown className='national-group'>
                                    <Dropdown.Toggle className='national-btn custom-btn' variant={null} id='dropdown-basic'>
                                        <div className='flag'>

                                        </div>
                                        <div className='ensign'>

                                        </div>
                                        <span className='icon'>
                                            <svg width="16" height="16" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path></svg>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className='reverse-icon'>
                            <a href='/'>
                                <svg width="24" height="24" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="m16.629 11.999-1.2-1.2 3.085-3.086H2.572V5.999h15.942L15.43 2.913l1.2-1.2 4.543 4.543a.829.829 0 0 1 0 1.2l-4.543 4.543Zm-9.257-.001 1.2 1.2-3.086 3.086h15.943v1.714H5.486l3.086 3.086-1.2 1.2-4.543-4.543a.829.829 0 0 1 0-1.2l4.543-4.543Z"></path></svg>
                            </a>
                        </div>
                        <div className='form-group'>
                            <label>Convert to</label>
                            <div className='input-group'>
                                <input className='custom-input' />
                                <Dropdown className='national-group'>
                                    <Dropdown.Toggle className='national-btn custom-btn' variant={null} id='dropdown-basic'>
                                        <div className='flag'>

                                        </div>
                                        <div className='ensign'>

                                        </div>
                                        <span className='icon'>
                                            <svg width="16" height="16" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path></svg>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className='conclusion'>
                        <h2>
                            information
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;