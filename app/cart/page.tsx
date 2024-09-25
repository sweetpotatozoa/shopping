'use client';

import { useCart } from '../CartContext'; // 장바구니 컨텍스트 훅 가져오기

export default function CartPage() {
    const { cart, removeFromCart } = useCart(); // 장바구니 상태와 제거 함수 가져오기

    return (
        <div className="w-full p-4">
            <h1 className="text-2xl font-bold mb-4">장바구니</h1>
            {cart.length === 0 ? (
                <p>장바구니가 비어 있습니다.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="flex items-center p-4 border-b">
                        <img src={item.image} alt={item.name} className="w-[100px] h-[100px] object-cover" />
                        <div className="ml-4">
                            <div className="text-lg font-semibold">{item.name}</div>
                            <div className="text-gray-600">{item.price}원</div>
                        </div>
                        <button
                            className="ml-auto bg-red-500 text-white py-2 px-4 rounded"
                            onClick={() => removeFromCart(item.id)} // 장바구니에서 상품 제거
                        >
                            제거
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}
