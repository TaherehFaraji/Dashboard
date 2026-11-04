import Card from '../Components/Card'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Calendar from '../Components/Calendar'
import QuickAccess from '../Components/QuickAccess';

const visitData = [
    { name: 'شنبه', value: 400 },
    { name: 'یکشنبه', value: 300 },
    { name: 'دوشنبه', value: 600 },
    { name: 'سه‌شنبه', value: 200 },
    { name: 'چهارشنبه', value: 700 },
    { name: 'پنجشنبه', value: 300 },
    { name: 'جمعه', value: 900 },
];

function Dashboard() {
    return (
        <div className='flex flex-col gap-6'>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <Card title='گزارشات مالی' className='text-center'>
                    <p className="text-gray-600 mb-2">کل درآمد</p>
                    <h3 className="text-4xl font-bold mb-4">+8.000.000</h3>
                    <p className="text-gray-600">تومان ، در ماه جاری</p>
                    <p className="text-green-500 font-bold mt-2">۱۲٪ ↑ نسبت به ماه قبل</p>
                </Card>
                <Card title='تعداد کاربران سایت'>
                    <div className="flex flex-col gap-4 mt-2">
                        <div className="flex flex-col gap-1 text-xs">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 font-medium">اشتراک پایه</span>
                                <span className="font-bold">285 نفر</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-full">
                                <div className="bg-blue-500 h-2 rounded-full w-[70%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-xs">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 font-medium">اشتراک حرفه‌ای</span>
                                <span className="font-bold">475 نفر</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-full">
                                <div className="bg-yellow-400 h-2 rounded-full w-[90%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-xs">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700 font-medium">اشتراک ویژه</span>
                                <span className="font-bold">315 نفر</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-full">
                                <div className="bg-red-500 h-2 rounded-full w-[60%]"></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                            <span className="text-red-500 font-bold text-lg">کل کاربران</span>
                            <div className="text-left">
                                <span className="text-3xl font-bold">1075</span>
                                <span className="text-sm text-gray-500 mr-1">نفر</span>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card title='بازدید از سایت'>
                    <div className="w-full h-48 mt-4" dir="ltr">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={visitData} margin={{ left: 20, right: 20, top: 10, bottom: 0 }}>
                                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} interval={0} />
                                <YAxis hide />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#3b82f6"
                                    strokeWidth={2}
                                    dot={{ r: 4, fill: '#3b82f6' }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="md:col-span-2 xl:col-span-2">
                    <Card title="لیست بازی ها">
                        <div className="text-center text-gray-400 mt-10 py-8 border-2 border-dashed border-gray-200 rounded-2xl">
                            جدول بازی‌ها به‌زودی...
                        </div>
                    </Card>
                </div>
                <div className="flex flex-col gap-6">
                    <Card title="دسترسی سریع">
                        <QuickAccess />
                    </Card>
                    <Card>
                        <Calendar />
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default Dashboard