import { getItems } from '../../store';
import { notFound } from 'next/navigation';
import AddToCart from '../../components/item/AddToCart';

// 동적 경로로 데이터를 가져오는 함수 (정적 경로 생성)
export async function generateStaticParams() {
    const items = getItems(); // 동기 함수라면 그대로 사용
    return items.map((item) => ({
        id: item.id.toString(),
    }));
}

// 개별 아이템 세부 페이지 (서버 컴포넌트)
export default async function ItemDetail({ params }: { params: { id: string } }) {
    const items = getItems(); // 만약 이 함수가 비동기적이라면 await 추가
    const item = items.find((item) => item.id.toString() === params.id);

    if (!item) {
        return notFound(); // 404 페이지로 이동 (즉시 리턴)
    }

    return (
        <div className="w-full flex-col">
            <img src={item.image} alt={item.name} className="w-full h-[300px] mb-2 object-cover" />
            <div>
                <h1 className="text-2xl font-bold">{item.name}</h1>
                <p className="text-xl">{item.price}원</p>
                <p>{item.description}</p>
            </div>

            {/* 장바구니 추가 버튼은 클라이언트 컴포넌트에서 처리 */}
            <AddToCart item={item} />
        </div>
    );
}
