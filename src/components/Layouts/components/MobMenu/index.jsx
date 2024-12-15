import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function MobMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
   isOpen ? "" : setClicked(false);
   setIsOpen(!isOpen);

  };
  const [clicked, setClicked] = useState(false);
  const toggleSubMenuItems = {
    enter: {
      height: 'auto',
      overflow: 'hidden',
    },
    exit: {
      height: 0,
      overflow: 'hidden',
    }
  }
  return (
    <div>
      <button className="relative z-10" onClick={toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <motion.div
         initial={{ x: '-100%' }}
         animate={{ x: isOpen ? '0%' : '-100%' }}
        className="fixed left-0 right-0 top-16 h-max overflow-y-auto bg-slate-100 p-6 text-primary backdrop-blur"
      >
        <ul className="uppercase">
          <li>
            <Link to='/' className="sub-menu" onClick={() => setIsOpen(false)}>trang chủ</Link>
          </li>
          <li>
            <div  className="sub-menu">
              <Link to='category' onClick={() => setIsOpen(false)}>
                <span className="">menu bánh</span>{' '}
              </Link>
              <ChevronDown onClick={() => setClicked(!clicked)} className={`ml-auto cursor-pointer ${clicked && 'rotate-180'}`} />
            </div>
            <motion.ul initial='exit'
            animate={clicked ? 'enter' : 'exit'}
            variants={toggleSubMenuItems}
            className="px-6">
              <li className="sub-menu py-2">
                <Link to="/category?mode=birthday" onClick={() => setIsOpen(false)}>Bánh Sinh Nhật</Link>
              </li>
              <li className="sub-menu py-2">
                <Link to="/category?mode=tradition" onClick={() => setIsOpen(false)}>Bánh Truyền Thống</Link>
              </li>
              <li className="sub-menu py-2">
                <Link to="/category?mode=cookie" onClick={() => setIsOpen(false)}>Cookie & Mini cake</Link>
              </li>
              <li className="sub-menu py-2">
                <Link to="/category?mode=bread" onClick={() => setIsOpen(false)}>Bánh Mì và Bánh mặn</Link>
              </li>
            </motion.ul>
          </li>
          <li>
            <Link to="/news" className="sub-menu" onClick={() => setIsOpen(false)}>
              tin tức
            </Link>
          </li>
          <li>
            <Link to="/generator" className="sub-menu" onClick={() => setIsOpen(false)}>
              ai
            </Link>
          </li>
          <li>
            <Link to="/about" className="sub-menu" onClick={() => setIsOpen(false)}>
              về chúng tôi
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default MobMenu;
