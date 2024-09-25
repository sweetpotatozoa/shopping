// app/items/[id]/ClientAddToCart.tsx
'use client'; // 클라이언트 컴포넌트

export default function ClientAddToCart({ item }: { item: Item }) {
    const { addToCart } = useStore(); // Zustand에서 가져오기

    return (
        <button
            className="w-full my-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={() => addToCart(item)}
        >
            날 눌러서 장바구니에 넣어줘!
        </button>
    );
}
