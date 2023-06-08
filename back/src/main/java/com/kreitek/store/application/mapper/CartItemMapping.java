package com.kreitek.store.application.mapper;

import com.kreitek.store.application.dto.CartItemDTO;
import com.kreitek.store.domain.entity.CartItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring",uses = {UserMapper.class,ItemMapper.class})
public interface CartItemMapping extends EntityMapper<CartItemDTO, CartItem> {

    @Override
    @Mappings({
            @Mapping(source = "item.id", target = "itemId"),
            @Mapping(source = "user.id",target = "userId")
    })
    CartItemDTO toDto(CartItem cartItem);

    @Override
    @Mappings({
            @Mapping(source = "itemId",target = "item"),
            @Mapping(source = "userId",target = "user")
    })
    CartItem toEntity(CartItemDTO cartItemDTO);
}
