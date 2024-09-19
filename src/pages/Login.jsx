import React from 'react'

function Login() {
    return (
        <div className='bg-blue-200 h-full flex justify-center items-center'>
            <div className="card w-96 h-auto bg-white shadow-sm p-1 pt-8 pb-8 flex flex-col items-center  ">
                <div>
                    <h1 className='text-3xl font-semibold text-opacity-0'>LOGIN FORM</h1>
                </div>
                <form action="">
                    <div className='mt-2 '>

                        <input type="text"
                            className='bg-blue-100  min-w-32 w-full mt-3 mb-3 leading-[2.1] p-1 rounded-sm'
                            name='email'
                            id='email'
                            placeholder='Email'
                        />


                    </div>
                    <div className='mt-2 '>

                        <input type="text"
                            className='bg-blue-100  min-w-64 mt-3 mb-3 leading-[2.1] p-1 rounded-sm'
                            name='password'
                            id='password'
                            placeholder='Password'

                        />
                    </div>
                    <div className='text-center text-white '>
                        <button
                            className='bg-gray-800 p-2 '
                        >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login