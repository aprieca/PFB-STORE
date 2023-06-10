package com.kreitek.store.application.mapper;

import com.kreitek.store.application.dto.RegisterDTO;
import com.kreitek.store.domain.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")

public interface RegisterMapper extends EntityMapper<RegisterDTO, User> {


}
