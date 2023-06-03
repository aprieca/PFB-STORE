package com.kreitek.store.application.mapper;

import com.kreitek.store.application.dto.LoginDTO;
import com.kreitek.store.domain.entity.User;
import org.mapstruct.Mapping;

public interface LoginMapper extends EntityMapper<LoginDTO, User> {

    @Override
    @Mapping(source = "username",target = "username")
    User toEntity(LoginDTO dto);

    @Override
    @Mapping(source = "password",target = "password")
    LoginDTO toDto (User user);
}
