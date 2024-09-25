'use client';

import { useCart } from '../../CartContext'; // Context API에서 장바구니 함수 가져오기
import { Item } from '../../CartContext'; // Item 타입 가져오기

interface AddToCartProps {
    item: Item;
}

export default function AddToCart({ item }: AddToCartProps) {
    const { addToCart } = useCart(); // 장바구니 추가 함수 사용

    return (
        <button
            className="w-full my-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={() => addToCart(item)} // 상품을 장바구니에 추가
        >
            장바구니에 담기
        </button>
    );
}
