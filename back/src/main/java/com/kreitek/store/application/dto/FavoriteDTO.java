package com.kreitek.store.application.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FavoriteDTO implements Serializable {

    private Long id;
    private Long itemId;
    private Long userId;
}
