"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BreadCrumbs = () => {
    const pathname = usePathname()
    const pathnames = pathname.split('/').filter(Boolean);

    return (
        <div className='bg-[#f2f2f2] text-gray-600 p-5'>
            <Link href="/" className='me-2'>Home</Link>
            {pathnames.map((value, index) => {
                const href = `/ ${pathnames.slice(0, index + 1).join('/')}`;
                const destine = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

                return (
                    <span key={href}>
                        {' / '}
                        {console.log(value, destine)}
                        {index === pathnames.length - 1 ? (
                            <span className='underline underline-offset-4 ms-2'>
                                {decodeURIComponent(destine)}
                            </span>
                        ) : (
                            <Link href={href}>{decodeURIComponent(value)}</Link>
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default BreadCrumbs;
