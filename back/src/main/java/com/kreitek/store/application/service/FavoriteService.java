package com.kreitek.store.application.service;

import com.kreitek.store.application.dto.FavoriteDTO;
import com.kreitek.store.domain.entity.Favorite;

import java.util.List;

public interface FavoriteService {

    List<FavoriteDTO> getFavoritesById(Long id);
    FavoriteDTO IntertFavorite(FavoriteDTO favoriteDTO);
    void deleteFavoriteById(Long favoriteId);
}
