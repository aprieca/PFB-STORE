package com.kreitek.store.infrastructure.persistence;

import com.kreitek.store.domain.entity.CartItem;
import com.kreitek.store.domain.persistence.CartItemPersistence;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class CartItemPersistenceImpl implements CartItemPersistence {

    private final CartItemRepository cartItemRepository;
    @Override
    public List<CartItem> getAllUserCartItems(Long userId) {
        return this.cartItemRepository.findAllByUserId(userId);
    }

    @Override
    public CartItem saveCartItem(CartItem cartItem) {
        return this.cartItemRepository.save(cartItem);
    }

    @Override
    public void deleteCartItem(Long cartItemId) {
        this.cartItemRepository.deleteById(cartItemId);
    }

    @Transactional
    @Override
    public void deleteAllCartItemsByUserId(Long userId) {
        this.cartItemRepository.deleteAllByUserId(userId);
    }

    @Override
    public CartItem updateCartItem(CartItem cartItem) {
       return this.cartItemRepository.save(cartItem);
    }

    @Override
    public Optional<CartItem> findCartItemById(Long cartiItemId) {
        return this.cartItemRepository.findById(cartiItemId);
    }

}
