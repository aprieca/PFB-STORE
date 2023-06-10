package com.kreitek.store.application.mapper;

import com.kreitek.store.application.dto.UserDTO;
import com.kreitek.store.domain.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring",uses = {CartItemMapping.class, FavoriteMapper.class})
public interface UserMapper extends EntityMapper<UserDTO, User> {

    default User fromid(Long id) {
        if (id == null) return null;
        User user = new User();
        user.setId(id);
        return user;
    }

}
