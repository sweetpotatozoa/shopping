'use client'; // 클라이언트 컴포넌트로 설정

import { createContext, useContext, useState, ReactNode } from 'react';

// Item 타입 정의
export interface Item {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
}

const items: Item[] = [
    {
        id: 1,
        name: '사과',
        image: 'https://www.cyso.co.kr/data/item/1634988878/64yA7ZGc1.jpg',
        price: 1100,
        description: '맛있는 사과 1번',
    },
    {
        id: 2,
        name: '사과',
        image: 'https://img.hankyung.com/photo/202403/AA.36104679.1.jpg',
        price: 1200,
        description: '맛있는 사과 2번',
    },
    {
        id: 3,
        name: '사과',
        image: 'https://i.namu.wiki/i/x384X7VN5lNVRoHM9jbUl9iy_zppgwCFy7G_xELf8oFePbmi-x4o1XdVkukMWCqHpUtngIEyLnnWPEs_5Cc_7g.webp',
        price: 1300,
        description: '맛있는 사과 3번',
    },
    {
        id: 4,
        name: '사과',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/1200px-Pink_lady_and_cross_section.jpg',
        price: 1400,
        description: '맛있는 사과 4번',
    },
    {
        id: 5,
        name: '사과',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_u5GVasG6Z0BTroc-lBakpZtgNXNI8244QA&s',
        price: 1500,
        description: '맛있는 사과 5번',
    },
    {
        id: 6,
        name: '사과',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSky_pjEerHybeyRnCg0J4ycWFBvV7ou0uYxg&s',
        price: 1600,
        description: '맛있는 사과 6번',
    },
    {
        id: 7,
        name: '사과',
        image: 'https://newneek.co/_next/image?url=https%3A%2F%2Fd2phebdq64jyfk.cloudfront.net%2Fmedia%2Fimage%2Farticle%2Fthumbnail%2F%25E1%2584%2583%25E1%2585%25A1%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25B5%25E1%2586%25AB_1-30.jpg&w=3840&q=75',
        price: 1700,
        description: '맛있는 사과 7번',
    },
    {
        id: 8,
        name: '사과',
        image: 'https://kormedi.com/wp-content/uploads/2022/11/ck-cm270027748-l-700x467.jpg',
        price: 1800,
        description: '맛있는 사과 8번',
    },
    {
        id: 9,
        name: '사과',
        image: 'https://health.chosun.com/site/data/img_dir/2023/06/20/2023062002262_0.jpg',
        price: 1900,
        description: '맛있는 사과 9번',
    },
    {
        id: 10,
        name: '사과',
        image: 'https://www.outdoornews.co.kr/news/photo/202009/32077_90504_551.jpg',
        price: 2000,
        description: '맛있는 사과 10번',
    },
];

// 장바구니 상태와 업데이트 함수의 타입 정의
interface CartContextType {
    cart: Item[];
    addToCart: (item: Item) => void;
    removeFromCart: (id: number) => void;
}

// Context 생성
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider 컴포넌트
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Item[]>([]);

    // 장바구니에 상품 추가
    const addToCart = (item: Item) => {
        const isAlreadyInCart = cart.some((cartItem) => cartItem.id === item.id);
        if (isAlreadyInCart) {
            alert('이미 장바구니에 담긴 상품입니다.');
        } else {
            alert('장바구니에 담겼습니다!');
            setCart([...cart, item]);
        }
    };

    // 장바구니에서 상품 제거
    const removeFromCart = (id: number) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};

// 커스텀 훅
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart는 CartProvider 내에서 사용해야 합니다.');
    }
    return context;
};
