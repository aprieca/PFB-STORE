package com.kreitek.store.domain.persistence;

import com.kreitek.store.domain.entity.Favorite;

import java.util.List;

public interface FavoritePersistence {
    List<Favorite> getAllFavoritesByUser(Long userId);
    Favorite InsertFavorite(Favorite favorite);

    void deleteFavorite(Long favoriteId);
}
