import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear()
  return (
    <footer className='text-center bg-'>
      <p>Copyright &#169; {year}</p>
    </footer>




  );
};

export default Footer;