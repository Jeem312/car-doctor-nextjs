import React from 'react';
import '../../Styles/Navbar.css'
import Image from 'next/image';
const Navbar = () => {
    return (
        <div className='Container'>
          <div className='something'>
              {/* logo part */}
              <div>
       <Image src={'assets/logo.svg'} height={80} width={100} alt='logo'/>
</div>
{/* links part */}
<div>
<p>Links</p>
</div>
{/* button part */}
<div>
 <p>buttons</p>
</div>
          </div>
        </div>
    );
};

export default Navbar;