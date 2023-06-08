package com.kreitek.store.domain.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "order_items")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "orderItemSequence")
    private Long id;
    private int quantity;
    private Double price;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne
    @JoinColumn(name = "item_id")
    private Item item;


}
