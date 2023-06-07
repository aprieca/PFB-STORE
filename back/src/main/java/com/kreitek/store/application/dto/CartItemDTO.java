package com.kreitek.store.application.dto;

import java.io.Serializable;

public class CartItemDTO implements Serializable {

    private Long id;
    private Long itemId;
    private Long userId;
    private int quantity;
}
