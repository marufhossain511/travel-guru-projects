import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className=' text-white'>
             <div className="navbar bg-transparent">
            <div className="navbar-start pr-5">
                <img className='h-14 lg:ml-10 ml-2 ' src={logo} alt="" />
            </div>
            <div className="navbar-center  lg:flex">
            <input type="text" placeholder="🔎Search your Destination..." className=" placeholder-stone-50 border-white text-white ml-32 mr-5 input border bg-transparent input-bordered w-56" />
             <Link className='mx-3 font-medium '>News</Link>
             <Link className='mx-3 font-medium'>Destination</Link>
             <Link className='mx-3 font-medium'>Blog</Link>
             <Link className='mx-3 font-medium'>Contact</Link>
            </div>
            <div className="navbar-end">
                <Link><button className='btn'>Login</button></Link>
            </div>
            </div>
        </div>
    );
};

export default Header;