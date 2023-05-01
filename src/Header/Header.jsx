import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'

const Header = () => {
    const location=useLocation()
    const from=location.pathname
    console.log(from);
    return (
        <div className={` mx-10  ${from === '/hotels/1' ?'text-black mt-5':'text-white'}`}>
             <div className='lg:flex justify-between bg-transparent'>
            <div className=" ">
                <Link to="/">
                <img className=' h-14 object-cover lg:ml-10 ml-36  ' src={logo} alt="" />
                </Link>
            </div>
            <div className="text-center py-2 ">
            <input type="text" placeholder="🔎Search your Destination..." className={`mb-2 lg:mb-0 ${from === '/hotels/1' ?'text-black border ':'text-white placeholder-stone-50 border-white'}  t lg:ml-32 mr-5 input border bg-transparent input-bordered w-56`} />
             <Link className='mr-3 font-medium '>News</Link>
             <Link className='mr-3 font-medium'>Destination</Link>
             <Link className='mr-3 font-medium'>Blog</Link>
             <Link className='mr-3 font-medium'>Contact</Link>
            </div>
            <div className=" text-center mt-4 lg:mt-0">
                <Link to="/login"><button className='btn'>Login</button></Link>
            </div>
            </div>
        </div>
    );
};

export default Header;