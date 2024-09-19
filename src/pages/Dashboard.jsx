import React from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const aboutUs = () => {
        navigate('/about')
    }
    return (

        <>
            <div className='block'>
                <div
                    className='bg-red-400'
                >Th</div>

                <div>
                    <h1>Go to About Us Page</h1>
                    <button
                        onClick={aboutUs}
                    >
                        Click here
                    </button>
                </div>

            </div>
        </>
    )
}

export default Dashboard