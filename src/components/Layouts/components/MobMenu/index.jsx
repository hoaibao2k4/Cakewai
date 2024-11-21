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
            <Link className="sub-menu">trang chủ</Link>
          </li>
          <li>
            <Link className="sub-menu" to="">
              <span className="">menu bánh</span>{' '}
              <ChevronDown onClick={() => setClicked(!clicked)} className={`ml-auto ${clicked && 'rotate-180'}`} />
            </Link>
            <motion.ul initial='exit'
            animate={clicked ? 'enter' : 'exit'}
            variants={toggleSubMenuItems}
            className="px-6">
              <li className="sub-menu py-2">
                <Link to="">Bánh Sinh Nhật</Link>
              </li>
              <li className="sub-menu py-2">
                <Link to="">Bánh Truyền Thống</Link>
              </li>
              <li className="sub-menu py-2">
                <Link to="">Cookie & Mini cake</Link>
              </li>
              <li className="sub-menu py-2">
                <Link to="">Bánh Mì và Bánh mặn</Link>
              </li>
            </motion.ul>
          </li>
          <li>
            <Link to="" className="sub-menu">
              tin tức
            </Link>
          </li>
          <li>
            <Link to="" className="sub-menu">
              ai
            </Link>
          </li>
          <li>
            <Link to="" className="sub-menu">
              về chúng tôi
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default MobMenu;
