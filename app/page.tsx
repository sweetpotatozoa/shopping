'use client';

import { useEffect, useState } from 'react';
import { Item } from './CartContext'; // Item 타입 가져오기
import { useCart } from './CartContext'; // useCart 훅 가져오기
import Link from 'next/link';

const getItems = (): Item[] => [
    {
        id: 1,
        name: '사과',
        image: 'https://example.com/apple.jpg',
        price: 1000,
        description: '맛있는 사과',
    },
];

export default function Home() {
    const [items, setItems] = useState<Item[]>([]);
    const { addToCart } = useCart(); // 장바구니 추가 함수 가져오기

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
