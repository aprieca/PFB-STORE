package com.kreitek.store.application.service;

import com.kreitek.store.application.dto.CartItemDTO;

import java.util.List;
import java.util.Optional;

public interface CartItemService {

    List<CartItemDTO> getCartItemsByUserId(Long userId);
    CartItemDTO insertCartItem(CartItemDTO cartItemDTO);
    void deleteCartItem(Long cartItemId);
    void deleteAllCartItemsByUserId(Long userId);
    CartItemDTO updateCartItem(CartItemDTO cartItemDTO);
    Optional<CartItemDTO> findCartItemById(Long cartItemId);
}
