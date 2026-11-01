'use client';

import { useEffect, useState } from 'react';

type NowProps = {
    formate: string;
};

export function Now({ formate }: NowProps) {
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
        const updateTime = () => setNow(new Date());

        updateTime();

        const id = setInterval(updateTime, 1000);
        return () => clearInterval(id);
    }, []);

    const formatDate = (date: Date, pattern: string) => {
        const values: Record<string, string> = {
            DD: String(date.getDate()).padStart(2, '0'),
            MM: String(date.getMonth() + 1).padStart(2, '0'),
            YYYY: String(date.getFullYear()),
            YY: String(date.getFullYear()).slice(-2),
            HH: String(date.getHours()).padStart(2, '0'),
            hh: String(date.getHours() % 12 || 12).padStart(2, '0'),
            mm: String(date.getMinutes()).padStart(2, '0'),
            ss: String(date.getSeconds()).padStart(2, '0'),
            A: date.getHours() >= 12 ? 'PM' : 'AM',
            a: date.getHours() >= 12 ? 'pm' : 'am',
        };

        return pattern.replace(
            /YYYY|YY|DD|MM|HH|hh|mm|ss|A|a/g,
            (token) => values[token]
        );
    };

    return (
        <time dateTime={now?.toISOString()}>
            {now ? formatDate(now, formate) : '…'}
        </time>
    );
}