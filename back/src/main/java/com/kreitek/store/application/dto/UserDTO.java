package com.kreitek.store.application.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Long id;
    private String username;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private int phone;
    private String role;
    private List<CartItemDTO> cartItems;
    private List<FavoriteDTO> favorites;
}
