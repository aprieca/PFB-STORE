package com.kreitek.store.domain.persistence;

import com.kreitek.store.domain.entity.CartItem;

import java.util.List;

public interface CartItemPersistence {

    List<CartItem> getAllUserCartItems(Long userId);
    CartItem saveCartItem(CartItem cartItem);
    void deleteCartItem(Long cartItemId);

    void deleteAllCartItemsByUserId(Long userId);
}
