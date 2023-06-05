package com.kreitek.store.application.service.impl;

import com.kreitek.store.application.dto.FavoriteDTO;
import com.kreitek.store.application.mapper.FavoriteMapper;
import com.kreitek.store.application.service.FavoriteService;
import com.kreitek.store.domain.entity.Favorite;
import com.kreitek.store.domain.persistence.FavoritePersistence;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class FavoriteServiceImpl implements FavoriteService {

    private final FavoritePersistence favoritePersistence;
    private final FavoriteMapper favoriteMapper;
    @Override
    public List<FavoriteDTO> getFavoritesById(Long id) {
        List<Favorite> favorites = this.favoritePersistence.getAllFavoritesByUser(id);
        return favoriteMapper.toDto(favorites);
    }

    @Override
    public FavoriteDTO IntertFavorite(FavoriteDTO favoriteDTO) {

        Favorite favorite= favoriteMapper.toEntity(favoriteDTO);
        this.favoritePersistence.InsertFavorite(favorite);
        return favoriteMapper.toDto(favorite);
    }

    @Override
    public void deleteFavoriteById(Long favoriteId) {
        this.favoritePersistence.deleteFavorite(favoriteId);
    }
}
