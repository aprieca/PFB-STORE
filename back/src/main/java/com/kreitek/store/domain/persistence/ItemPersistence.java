package com.kreitek.store.domain.persistence;

import com.kreitek.store.domain.entity.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ItemPersistence {
    List<Item> getAllItems();
    List<Item> getAllItemsByCategory(Long categoryId);
    Optional<Item> getItemById(Long itemId);

    Item insertItem(Item itemId);

    void deleteItem(Long itemId);

    Page<Item> findAll(Pageable pageable, String filters);

    List<Item> getItemsInBatch(List<Long> ids);
}
