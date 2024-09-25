'use client';

import { useEffect, useState } from 'react';
import { getItems, Item } from './store';
import Link from 'next/link';

export default function Home() {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchedItems = getItems();
        setItems(fetchedItems);
    }, []);

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
