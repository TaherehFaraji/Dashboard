import { NavLink } from 'react-router-dom'
import { User, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
    { name: 'گزارشات مالی', path: '/finance' },
    { name: 'تیکت ها', path: '/tickets' },
    { name: 'کاربران', path: '/users' },
    { name: 'بازی و آموزش', path: '/games' },
    { name: 'تنظیمات', path: '/setting' },
    { name: 'داشبورد', path: '/' }
]

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full max-w-7xl mx-auto px-4 pt-6 relative z-50">
            <nav className="bg-gradient-to-l from-[#1A5B64] to-[#2E8C96] flex items-center xl:items-end justify-between rounded-[2rem] p-2 pl-4 shadow-sm relative">
                <ul className="hidden xl:flex items-end gap-1">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `block px-6 text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'bg-[#F9F9F9] text-[#1A5B64] font-bold rounded-t-2xl rounded-b-none pt-3 pb-4 -mb-2'
                                        : 'text-white hover:text-gray-200 hover:bg-white/10 rounded-2xl py-2.5 mb-2'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="xl:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-all"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <div className="flex items-center gap-3 xl:mb-2" dir="ltr">
                    <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white">
                        <User size={20} />
                    </div>
                    <span className="text-white font-medium text-sm hidden sm:block">Admin</span>
                    <div className="w-px h-6 bg-white/30 mx-1 hidden sm:block"></div>
                    <button className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all hidden sm:block" title="خروج">
                        <LogOut size={20} />
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-[#1A5B64] rounded-[2rem] p-4 flex flex-col gap-2 xl:hidden shadow-lg border border-white/10">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                                        ? 'bg-[#F9F9F9] text-[#1A5B64] font-bold'
                                        : 'text-white hover:bg-white/10'
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}

                        <div className="border-t border-white/20 mt-2 pt-4 flex justify-between items-center px-4">
                            <span className="text-white text-sm">خروج از حساب</span>
                            <button className="text-white/80 hover:text-white p-2">
                                <LogOut size={20} />
                            </button>
                        </div>
                    </div>
                )}

            </nav>
        </header>
    )
}

export default Navbar