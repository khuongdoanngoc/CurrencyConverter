import './Home.css'

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
                            {/* <label>Amount of money</label> */}
                        </div>
                        <div className='reverse-icon'>

                        </div>
                        <div className='form-group'>
                            {/* <label>Convert to</label> */}
                        </div>
                    </div>
                    <div className='conclusion'>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Home;