import logo from '/logo-icon.png';
import { useState, useEffect } from 'react';
import { Cancel01Icon, Menu01Icon } from 'hugeicons-react';

import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSubMenu = (index: number) => {
    if (openSubMenu === index) {
      setOpenSubMenu(null); // Close submenu if it's already open
    } else {
      setOpenSubMenu(index); // Open the clicked submenu
    }
  };

  const handleMenuClick = () => {
    setIsOpenMenu(false); // Close the mobile menu
    setOpenSubMenu(null); // Close any open submenu
  };

  const menuItems = [
    {
      label: 'WHO WE ARE',
      submenu: [{ label: 'Board of Directors', slug: 'board-of-directors' }],
    },
    {
      label: 'WHAT IS OUR GOAL',
      submenu: [
        { label: 'Education', slug: 'goal/education' },
        { label: 'Health', slug: 'goal/health' },
        { label: 'Women & Girls', slug: 'goal/women-and-girls' },
        { label: 'Empowerment', slug: 'goal/empowerment' },
        { label: 'Financial Freedom', slug: 'goal/financial-freedom' },
      ],
    },
    { label: 'WE FOLLOW', slug: 'we-follow' },
    { label: 'WHERE WE WORK', slug: 'where-we-work' },
    { label: 'GALLERY', slug: 'gallery' },
    { label: 'JOIN OUR TEAM', slug: 'join-us' },
    { label: 'DONATE', slug: 'donate' },
  ];

  return (
    <>
      <header
        className={cn(
          ' mx-auto flex items-center sticky top-0 py-3 px-3 border-b z-[999] transition-colors duration-300 bg-white',
          isScrolled ? 'py-2 ' : ''
        )}
      >
        <div className="w-full flex items-center justify-between container mx-auto">
          <div className="w-fit flex items-center gap-5 md:gap-8 transition-all duration-200 relative">
            <Link to={'/'} className="flex items-center justify-center">
              <img src={logo} width={70} alt="Logo" className="" />

              <div className="ms-2">
                <h2 className="text-nowrap font-bold text-base xl:text-lg text-orange">
                  Mustafiz Foundation Inc.
                </h2>
                <p className="text-nowrap text-base xl:text-lg">
                  Frontiers for Humanity
                </p>
              </div>
            </Link>
          </div>

          <div
            className={cn(
              'fixed top-0 left-0 bottom-0 bg-white md:bg-transparent md:relative flex flex-col md:flex-row w-[80%] max-w-[300px]  md:w-fit md:max-w-none py-8 md:p-0 shadow-xl md:shadow-none transition-all duration-300 shrink-0 md:items-center gap-y-5 gap-x-2 xl:gap-x-4  2xl:gap-x-5 text-blue-950 md:text-blue-950 ps-3',
              isOpenMenu
                ? 'translate-x-0 z-[999] '
                : '-translate-x-[100%] md:translate-x-0',
              isScrolled && 'md:text-blue-950 py-2'
            )}
          >
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {item.submenu ? (
                  // Menu items with a submenu
                  <button
                    onClick={() => toggleSubMenu(index)}
                    className={`text-sm md:text-sm  xl:text-lg font-medium md:font-semibold relative flex flex-col group capitalize ${
                      item.label === 'DONATE' &&
                      'bg-orange text-white px-2 xl:px-6 py-2 hover:text-white rounded-sm'
                    }`}
                  >
                    <span>
                      {item.label}{' '}
                      {item.submenu && (
                        <i className="fa-solid fa-chevron-down 2xl:ml-2"></i>
                      )}
                    </span>
                    <span
                      className={cn(
                        'h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300',
                        isScrolled && 'bg-zinc-700'
                      )}
                    ></span>
                  </button>
                ) : (
                  // Menu items without a submenu
                  <Link
                    to={`/${item.slug || '#'}`}
                    onClick={handleMenuClick} // Close menu and submenu after click
                    className={`text-sm xl:text-lg font-medium md:font-semibold relative flex flex-col group capitalize ${
                      item.label === 'DONATE' &&
                      'bg-orange text-white px-6 py-2 hover:text-white rounded-sm'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={cn(
                        'h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300',
                        isScrolled && 'bg-zinc-700'
                      )}
                    ></span>
                  </Link>
                )}

                {item.submenu && (
                  <div
                    className={cn(
                      'absolute top-full left-0 bg-orange shadow-md p-4 mt-2 transition-all duration-300 z-[998] text-nowrap',
                      openSubMenu === index
                        ? 'visible opacity-100'
                        : 'invisible opacity-0'
                    )}
                  >
                    <div className="flex flex-col gap-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={`/${subItem.slug}`}
                          onClick={handleMenuClick}
                          className="text-md text-white"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Menu Icon */}
          <button
            className="p-1 md:hidden"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            {isOpenMenu ? (
              <Cancel01Icon
                size={30}
                className={cn(
                  'text-zinc-600 select-none size-8',
                  isScrolled && 'size-6 text-zinc-700'
                )}
              />
            ) : (
              <Menu01Icon
                size={30}
                className={cn(
                  'text-zinc-600 select-none',
                  isScrolled && 'size-6 text-zinc-700'
                )}
              />
            )}
          </button>

          {isOpenMenu && (
            <div
              onClick={handleMenuClick}
              className="fixed inset-0 z-[998] bg-black opacity-25 md:hidden"
            ></div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
