import { useState, useEffect, useMemo, useTransition } from 'react';
import { Search, User } from 'lucide-react';
import Card from '../Components/Card';
import { fetchUsers } from '../data/users';

function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (error) {
                console.error('خطا در دریافت کاربران:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadUsers();
    }, []);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        startTransition(() => {
            setSearchTerm(value);
        });
    };

    const filteredUsers = useMemo(() => {
        if (!searchTerm.trim()) return users;
        const term = searchTerm.toLowerCase();
        return users.filter(
            (user) =>
                user.name.toLowerCase().includes(term) ||
                user.phone.includes(term) ||
                user.id.toLowerCase().includes(term)
        );
    }, [users, searchTerm]);

    return (
        <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto mt-4">
            <div className="flex items-center justify-center gap-3 mb-2">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="جستجوی نام، شماره یا آیدی..."
                        value={inputValue}
                        onChange={handleSearchChange}
                        className={`w-64 md:w-80 px-4 py-2 border-2 border-black rounded-full outline-none focus:ring-2 focus:ring-[#1A5B64] text-gray-800 transition-opacity ${isPending ? 'opacity-70' : 'opacity-100'
                            }`}
                    />
                    {isPending && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                            <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}
                </div>

                <button className="flex items-center gap-2 px-5 py-2 border-2 border-black rounded-full font-bold text-gray-800 hover:bg-gray-100 transition-colors">
                    <Search size={18} strokeWidth={2.5} />
                    <span>جستجو</span>
                </button>
            </div>
            <Card className="p-2 md:p-4">
                {isLoading ? (
                    <div className="text-center py-10 font-bold text-gray-500 animate-pulse">
                        در حال دریافت اطلاعات کاربران...
                    </div>
                ) : (
                    <div className={`flex flex-col gap-3 transition-opacity duration-200 ${isPending ? 'opacity-50' : 'opacity-100'}`}>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <div
                                    key={user.id}
                                    className="flex items-center justify-between px-2 py-3"
                                >
                                    <div className="flex items-center gap-3 md:gap-6 flex-wrap">
                                        <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500">
                                            <User size={20} />
                                        </div>

                                        <span className="font-bold text-black text-sm">({user.id})</span>
                                        <span className="text-gray-800 text-sm font-medium min-w-[120px]">{user.name}</span>
                                        <span className="text-gray-600 text-sm w-32" dir="ltr">{user.phone}</span>
                                        <span className="text-gray-800 text-sm font-medium w-24 text-center">{user.sub}</span>
                                        <span className="text-gray-800 text-sm font-medium w-24 text-center">{user.activity}</span>
                                    </div>

                                    <div className="flex items-center gap-2" dir="ltr">
                                        <button className="bg-[#dc3545] text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-red-600 transition-colors">حذف</button>
                                        <button className="bg-[#8c939d] text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-gray-500 transition-colors">ویرایش</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-10 text-gray-500 font-medium">
                                کاربری با مشخصات وارد شده یافت نشد.
                            </div>
                        )}
                    </div>
                )}
            </Card>
        </div>
    );
}

export default Users