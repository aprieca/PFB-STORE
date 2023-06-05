package com.kreitek.store.application.mapper;

import com.kreitek.store.application.dto.FavoriteDTO;
import com.kreitek.store.domain.entity.Favorite;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring" ,uses = {UserMapper.class})
public interface FavoriteMapper extends EntityMapper<FavoriteDTO, Favorite> {

    @Override
    @Mapping(source = "user.id",target = "userId")
    FavoriteDTO toDto(Favorite entity);

    @Override
    @Mapping(source = "userId",target = "user")
    Favorite toEntity(FavoriteDTO entity);

}
