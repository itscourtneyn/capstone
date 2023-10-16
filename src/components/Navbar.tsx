import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible);
    };

    const clicked = () => {
        setIsVisible(false);
    };

    return (
        <nav className='flex items-center justify-between flex-wrap bg-white p-6'>
            <div className='flex items-center flex-shrink-0 text-yellow-900 mr-6'>
            {/* <i className="fa-solid fa-regular fa-sun text-3xl"></i> */}
                <Link to='/' className='font-semibold font-mono text-2xl tracking-tight drop-shadow-lg object-center'>Rise & Sourdough</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-right px-2 py-1 text-yellow-900 border rounded-lg drop-shadow-lg border-white hover:text-white hover:border-white'>
                <i className="fa-solid fa-bread-slice text-3xl"></i>
                </button>
            </div>
            { isVisible ? (
                <div className='w-full block flex-grow items-center'>
                    <div className="text-sm lg:flex-grow">
                        <Button className='p-3 m-5 bg-yellow-900 justify-center rounded-lg'>
                            <div>
                                <Link to='/' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0  text-yellow-50 hover:text-white mr-4 font-serif'>
                                    Home
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-yellow-900 justify-center rounded-lg'>
                            <div>
                                <Link to='/About' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-yellow-50 hover:text-white mr-4 font-serif'>
                                    About Sourdough
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-yellow-900 justify-center rounded-lg'>
                            <div>
                                <Link to='/gettingstarted' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-yellow-50 hover:text-white mr-4 font-serif'>
                                    Getting Started
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-yellow-900 justify-center rounded-lg'>
                            <div>
                                <Link to='/featured' onClick={ clicked} className='flex place-items-center mt-4 font-serif lg:inline-block lg:mt-0 text-yellow-50 hover:text-white mr-4'>
                                     Featured Recipes
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-yellow-900 justify-center rounded-lg'>
                            <div>
                                <Link to='/shared' onClick={ clicked} className='flex place-items-center mt-4 font-serif lg:inline-block lg:mt-0 text-yellow-50 hover:text-white mr-4'>
                                    Shared Recipes
                                </Link>
                            </div>
                        </Button>

                        {
                            !isAuthenticated ? 
                            <Button className='p-3 m-5 bg-yellow-900 justify-center rounded-lg'>
                                <div>
                                    <Link to="/" onClick={signInOnClick} className='flex place-items-center mt-4 font-serif lg:inline-block lg:mt-0 text-yellow-50 hover:text-white'>
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='p-3 m-5 bg-yellow-900 justify-center rounded-lg'>
                                <div>
                                    <Link to="/" onClick={signOutOnClick} className='flex place-items-center mt-4 font-serif lg:inline-block lg:mt-0 text-yellow-50 hover:text-white'>
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                    </div>
                </div>
            ) : (
                <></>
            )}
        </nav>
    );
}

export default Navbar;