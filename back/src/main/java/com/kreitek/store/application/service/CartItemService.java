package com.kreitek.store.application.service;

import com.kreitek.store.application.dto.CartItemDTO;

import java.util.List;

public interface CartItemService {

    List<CartItemDTO> getCartItemsByUserId(Long userId);
    CartItemDTO insertCartItem(CartItemDTO cartItemDTO);
    void deleteCartItem(Long cartItemId);
    void deleteAllCartItemsByUserId(Long userId);
}
