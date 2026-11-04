import { ChevronLeft } from 'lucide-react';

const quickLinks = [
    { title: 'افزودن بازی جدید', path: '/games/add' },
    { title: 'مدیریت کاربران', path: '/users' },
];

function QuickAccess() {
    return (
        <div className="flex flex-col gap-3">
            {quickLinks.map((link) => (
                <button
                    key={link.title}
                    className="group w-full flex items-center justify-between px-4 py-3 bg-gray-800 text-white rounded-xl border-2 border-black hover:bg-gray-700 transition-colors"
                >
                    <span className="text-sm font-medium group-hover:text-white">
                        {link.title}
                    </span>
                    <ChevronLeft
                        size={18}
                        className="text-gray-400 group-hover:text-white transition-transform group-hover:-translate-x-1"
                    />
                </button>
            ))}
        </div>
    );
}
export default QuickAccess