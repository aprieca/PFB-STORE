package com.kreitek.store.infrastructure.persistence;

import com.kreitek.store.domain.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface FavoriteRepository extends JpaRepository<Favorite,Long> {
    List<Favorite> findAllByUserId(Long id);
}
