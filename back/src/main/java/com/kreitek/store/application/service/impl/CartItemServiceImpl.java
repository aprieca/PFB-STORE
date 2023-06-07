package com.kreitek.store.application.service.impl;

import com.kreitek.store.application.dto.CartItemDTO;
import com.kreitek.store.application.mapper.CartItemMapping;
import com.kreitek.store.application.service.CartItemService;
import com.kreitek.store.domain.entity.CartItem;
import com.kreitek.store.domain.persistence.CartItemPersistence;
import com.kreitek.store.infrastructure.persistence.CartItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartItemServiceImpl implements CartItemService {

    private final CartItemPersistence cartItemPersistence;
    private final CartItemMapping cartItemMapper;
    @Override
    public List<CartItemDTO> getCartItemsByUserId(Long userId) {
        List<CartItem> cartItems = this.cartItemPersistence.getAllUserCartItems(userId);
        return this.cartItemMapper.toDto(cartItems);
    }

    @Override
    public CartItemDTO insertCartItem(CartItemDTO cartItemDTO) {
        CartItem cartItem = this.cartItemMapper.toEntity(cartItemDTO);
        this.cartItemPersistence.saveCartItem(cartItem);
        return this.cartItemMapper.toDto(cartItem);
    }

    @Override
    public void deleteCartItem(Long cartItemId) {
        this.cartItemPersistence.deleteCartItem(cartItemId);
    }

    @Override
    public void deleteAllCartItemsByUserId(Long userId) {
        this.cartItemPersistence.deleteAllCartItemsByUserId(userId);
    }
}
