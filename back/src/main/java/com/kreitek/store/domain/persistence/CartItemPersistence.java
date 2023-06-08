package com.kreitek.store.domain.persistence;

import com.kreitek.store.domain.entity.CartItem;

import java.util.List;
import java.util.Optional;

public interface CartItemPersistence {

    List<CartItem> getAllUserCartItems(Long userId);
    CartItem saveCartItem(CartItem cartItem);
    void deleteCartItem(Long cartItemId);
    void deleteAllCartItemsByUserId(Long userId);
    CartItem updateCartItem(CartItem cartItem);

    Optional<CartItem> findCartItemById(Long cartiItemId);
}
