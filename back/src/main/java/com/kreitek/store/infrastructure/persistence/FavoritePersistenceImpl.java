package com.kreitek.store.infrastructure.persistence;

import com.kreitek.store.domain.entity.Favorite;
import com.kreitek.store.domain.persistence.FavoritePersistence;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@RequiredArgsConstructor
public class FavoritePersistenceImpl implements FavoritePersistence {

    private final FavoriteRepository favoriteRepository;
    @Override
    public List<Favorite> getAllFavoritesByUser(Long userId) {
        return this.favoriteRepository.findAllByUserId(userId);
    }
    @Override
    public Favorite InsertFavorite(Favorite favorite) {
        return this.favoriteRepository.save(favorite);
    }
    @Override
    public void deleteFavorite(Long favoriteId) {
        this.favoriteRepository.deleteById(favoriteId);
    }
}
