import {FC} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {navBarItems} from '../../constants/navBarItems';
import { scrollToSection } from '../../utils/scrollTools';

import '../../styles/components/navbar/NavBarList.sass';

interface NavbarListProps {
  styleName: string;
}

const NavbarList: FC<NavbarListProps> = ({styleName}) => {
  return (
    <div className={styleName}>
      {styleName === 'list-conteiner-mobile' &&
        <motion.div
        className="list-title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        >
        Navigation
        </motion.div>}

      <ul>
        {navBarItems.map((item: { number: string, label: string, href: string }, index: number) =>
          (styleName === 'list-conteiner-mobile' ? (
          <AnimatePresence>
            <motion.li
              initial={{ y: 20, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: index * 0.25 }}
            >
              <p className="item-number">{item.number}</p>
              <a onClick={() => scrollToSection(item.href)}>{item.label}</a>
            </motion.li>
          </AnimatePresence>
            ) : (
              <li key={index}>
                <a onClick={() => scrollToSection(item.href)}>{item.label}</a>
              </li>
            )
          ))}
      </ul>
    </div>
  );
};

export default NavbarList;
