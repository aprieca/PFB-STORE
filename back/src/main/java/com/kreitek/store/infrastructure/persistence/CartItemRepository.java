package com.kreitek.store.infrastructure.persistence;

import com.kreitek.store.domain.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem,Long> {
    List<CartItem> findAllByUserId(Long id);
    void deleteAllByUserId(Long userId);
}
