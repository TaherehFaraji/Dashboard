import { useState, useMemo } from 'react';
import { toJalaali, toGregorian, jalaaliMonthLength } from 'jalaali-js';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const persianMonths = [
    'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
    'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
];

const weekDays = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];

const toPersianDigits = (num) => num.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);

function Calendar() {
    const today = useMemo(() => {
        const now = new Date();
        return toJalaali(now.getFullYear(), now.getMonth() + 1, now.getDate());
    }, []);

    const [currentYear, setCurrentYear] = useState(today.jy);
    const [currentMonth, setCurrentMonth] = useState(today.jm);

    const calendarDays = useMemo(() => {
        const daysInMonth = jalaaliMonthLength(currentYear, currentMonth);

        const g = toGregorian(currentYear, currentMonth, 1);
        const firstDayWeekday = (new Date(g.gy, g.gm - 1, g.gd).getDay() + 1) % 7;

        const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        const prevYear = currentMonth === 1 ? currentYear - 1 : currentYear;
        const daysInPrevMonth = jalaaliMonthLength(prevYear, prevMonth);

        const days = [];

        for (let i = firstDayWeekday - 1; i >= 0; i--) {
            days.push({ num: daysInPrevMonth - i, muted: true, isToday: false });
        }

        for (let d = 1; d <= daysInMonth; d++) {
            const isToday =
                currentYear === today.jy &&
                currentMonth === today.jm &&
                d === today.jd;
            days.push({ num: d, muted: false, isToday });
        }

        const remaining = 42 - days.length;
        for (let d = 1; d <= remaining; d++) {
            days.push({ num: d, muted: true, isToday: false });
        }

        return days;
    }, [currentYear, currentMonth, today]);

    const goToPrevMonth = () => {
        if (currentMonth === 1) {
            setCurrentMonth(12);
            setCurrentYear((y) => y - 1);
        } else {
            setCurrentMonth((m) => m - 1);
        }
    };

    const goToNextMonth = () => {
        if (currentMonth === 12) {
            setCurrentMonth(1);
            setCurrentYear((y) => y + 1);
        } else {
            setCurrentMonth((m) => m + 1);
        }
    };

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-6 px-2" dir="ltr">
                <div className="flex gap-2">
                    <button
                        onClick={goToNextMonth}
                        className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        title="ماه بعد"
                    >
                        <ChevronLeft size={16} className="text-gray-600" />
                    </button>
                    <button
                        onClick={goToPrevMonth}
                        className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        title="ماه قبل"
                    >
                        <ChevronRight size={16} className="text-gray-600" />
                    </button>
                </div>
                <div className="font-bold text-gray-800 text-sm">
                    {persianMonths[currentMonth - 1]} {toPersianDigits(currentYear)}
                </div>
            </div>

            <div className="grid grid-cols-7 gap-y-4 text-center">
                {weekDays.map((day, idx) => (
                    <div key={idx} className="text-[11px] text-gray-400 mb-2 font-medium">
                        {day}
                    </div>
                ))}

                {calendarDays.map((day, idx) => (
                    <div
                        key={idx}
                        className={`text-sm flex items-center justify-center w-7 h-7 mx-auto rounded-full transition-colors ${day.muted
                                ? 'text-gray-300'
                                : day.isToday
                                    ? 'bg-[#1A5B64] text-white font-bold'
                                    : 'text-gray-800 font-medium hover:bg-gray-100 cursor-pointer'
                            }`}
                    >
                        {toPersianDigits(day.num)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calendar