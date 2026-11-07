import { Wallet, BadgeDollarSign, CircleCheckBig, Clock, ReceiptText, ArrowLeft } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import Card from '../Components/Card';
import { financeStats, recentTransactions, monthlyIncomeData } from '../data/finance';

function Finance() {
    return (
        <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-1 text-right">
                            <span className="text-gray-600 text-sm font-medium">کل درآمد</span>
                            <span className="text-2xl font-bold text-gray-900">
                                {financeStats.totalIncome.amount} <span className="text-sm font-normal">تومان</span>
                            </span>
                            <span className="text-emerald-600 text-xs font-bold">
                                {financeStats.totalIncome.growth} رشد
                            </span>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                            <Wallet size={24} />
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-1 text-right">
                            <span className="text-gray-600 text-sm font-medium">درآمد خالص</span>
                            <span className="text-2xl font-bold text-gray-900">
                                {financeStats.netIncome.amount} <span className="text-sm font-normal">تومان</span>
                            </span>
                            <span className="text-emerald-600 text-xs font-bold">
                                {financeStats.netIncome.growth} رشد
                            </span>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                            <BadgeDollarSign size={24} />
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-1 text-right">
                            <span className="text-gray-600 text-sm font-medium">تراکنش‌های موفق</span>
                            <span className="text-2xl font-bold text-gray-900">
                                {financeStats.successfulTx.count}
                            </span>
                            <span className="text-emerald-600 text-xs font-bold">
                                {financeStats.successfulTx.percentage} از کل تراکنش‌ها
                            </span>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                            <CircleCheckBig size={24} />
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-1 text-right">
                            <span className="text-gray-600 text-sm font-medium">تراکنش‌های در انتظار</span>
                            <span className="text-2xl font-bold text-gray-900">
                                {financeStats.pendingTx.count}
                            </span>
                            <span className="text-orange-500 text-xs font-bold">
                                {financeStats.pendingTx.percentage} از کل تراکنش‌ها
                            </span>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                            <Clock size={24} />
                        </div>
                    </div>
                </Card>

            </div>

            <Card>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-gray-800">آخرین تراکنش ها</h2>
                    <button className="flex items-center gap-1 text-sm text-gray-600 font-medium hover:text-black transition-colors">
                        مشاهده همه
                        <ArrowLeft size={16} />
                    </button>
                </div>

                <div className="flex flex-col">
                    {recentTransactions.map((tx, idx) => (
                        <div
                            key={tx.id}
                            className={`flex justify-between items-center py-4 ${idx !== recentTransactions.length - 1 ? 'border-b border-gray-100' : ''
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600">
                                    <ReceiptText size={20} />
                                </div>
                                <div className="flex flex-col text-right">
                                    <span className="font-bold text-gray-800 text-sm">{tx.title}</span>
                                    <span className="text-gray-400 text-xs mt-1">{tx.date}</span>
                                </div>
                            </div>

                            <div className="flex flex-col text-left">
                                <span className="font-bold text-gray-800 text-sm">{tx.amount} تومان</span>
                                <span
                                    className={`text-xs font-bold mt-1 ${tx.status === 'موفق' ? 'text-emerald-600' : 'text-orange-500'
                                        }`}
                                >
                                    {tx.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
            <Card>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="font-bold text-gray-800">درآمد ماهانه : میلیون تومان</h2>
                    <span className="text-red-500 text-xs font-bold">درآمد ماهانه</span>
                </div>

                <div className="w-full h-64" dir="ltr">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyIncomeData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                            <XAxis
                                dataKey="month"
                                tick={{ fontSize: 12, fill: '#6b7280' }}
                                axisLine={false}
                                tickLine={false}
                                interval={0}
                            />
                            <YAxis
                                tick={{ fontSize: 12, fill: '#9ca3af' }}
                                axisLine={false}
                                tickLine={false}
                                orientation="right"
                            />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                contentStyle={{
                                    borderRadius: '12px',
                                    border: 'none',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                }}
                            />
                            <Bar dataKey="income" fill="#3b82f6" radius={[8, 8, 0, 0]} barSize={40}>
                                <LabelList dataKey="income" position="top" fill="#6b7280" fontSize={12} fontWeight="bold" />
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Card>

        </div>
    );
}

export default Finance