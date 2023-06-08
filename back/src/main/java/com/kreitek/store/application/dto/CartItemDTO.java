package com.kreitek.store.application.dto;

import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class CartItemDTO implements Serializable {

    private Long id;
    private Long itemId;
    private String name;
    private String categoryName;
    private Long userId;
    private byte[] image;
    private int quantity;
    private int price;
}
