package com.kreitek.store.domain.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
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

    @ManyToOne
    @JoinColumn(name="item_id",nullable = false)
    private Item item;

    @ManyToOne
    @JoinColumn(name = "user_id",nullable = false)
    private User user;
    @NotNull
    @Column(nullable = false,length = 100)
    private String name;
    @NotNull
    @Column(nullable = false,length = 100)
    private String categoryName;
    @Lob
    private byte[] image;
    @NotNull
    @Positive
    @Column(nullable = false)
    private int quantity;
    @NotNull
    @Positive
    @Column(nullable = false)
    private Double price;

}
