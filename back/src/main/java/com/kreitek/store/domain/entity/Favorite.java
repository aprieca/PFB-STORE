package com.kreitek.store.domain.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "favorites")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "favoriteSequence")
    private Long id;
    @NotNull
    private Long itemId;

    @ManyToOne
    @JoinColumn(name ="user_id",nullable = false)
    private User user;

}
