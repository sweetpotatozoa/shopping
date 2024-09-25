'use client'; // 클라이언트 컴포넌트로 변경

import { items } from '../../CartContext'; // useCart를 통해 items 가져오기
import { notFound } from 'next/navigation';
import AddToCart from '../../components/item/AddToCart'; // 클라이언트 컴포넌트

// 개별 아이템 세부 페이지 (클라이언트 컴포넌트)
export default function ItemDetail({ params }: { params: { id: string } }) {
    const item = items.find((item) => item.id.toString() === params.id);

    if (!item) {
        return notFound(); // 404 페이지로 이동
    }

    return (
        <div className="w-full flex-col">
            <img src={item.image} alt={item.name} className="w-full h-[300px] mb-2 object-cover" />
            <div>
                <h1 className="text-2xl font-bold">{item.name}</h1>
                <p className="text-xl">{item.price}원</p>
                <p>{item.description}</p>
            </div>

            {/* 장바구니 추가 버튼 */}
            <AddToCart item={item} />
        </div>
    );
}
