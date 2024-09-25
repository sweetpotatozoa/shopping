import { useCart } from '../../CartContext'; // Context에서 상품 목록 가져오기
import { notFound } from 'next/navigation';
import AddToCart from '../../components/item/AddToCart';

// 개별 아이템 세부 페이지 (서버 컴포넌트)
export default function ItemDetail({ params }: { params: { id: string } }) {
    const { items } = useCart(); // 상품 목록 가져오기
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
