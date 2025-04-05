// src/components/Footer.tsx
const Footer = () => {
    return (
      <footer className="py-6 mt-10 text-center text-white bg-black">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PictureDheko. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  