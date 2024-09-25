'use client';

import { items } from './CartContext'; // Context에서 items 직접 가져오기
import Link from 'next/link';

export default function Home() {
    return (
        <div className="w-full h-[600px] flex-col overflow-scroll scrollbar-none">
            {items.map((item) => (
                <Link key={item.id} href={`/item/${item.id}`}>
                    <div className="flex items-center p-4 border-b">
                        <img src={item.image} alt={item.name} className="w-[100px] h-[100px] object-cover" />
                        <div className="ml-4">
                            <div className="text-lg font-semibold">{item.name}</div>
                            <div className="text-gray-600">{item.price}원</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
