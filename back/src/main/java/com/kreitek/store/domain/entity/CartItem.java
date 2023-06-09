package com.kreitek.store.domain.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@DynamicUpdate
@Table(name="cart_items")
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cartItemsSequence")
    private Long id;

    @NotNull
    @ManyToOne
    @JoinColumn(name="item_id",unique = true)
    private Item item;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @NotNull
    private String name;
    @NotNull
    private String categoryName;
    @Lob
    private byte[] image;
    @NotNull
    private int quantity;
    @NotNull
    private int price;

}
