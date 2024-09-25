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
