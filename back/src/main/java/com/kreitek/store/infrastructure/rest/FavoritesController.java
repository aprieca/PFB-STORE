package com.kreitek.store.infrastructure.rest;

import com.kreitek.store.application.dto.FavoriteDTO;
import com.kreitek.store.application.service.FavoriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class FavoritesController {

    private final FavoriteService favoriteService;

    @CrossOrigin
    @GetMapping(value = "users/{id}/favorites",produces = "application/json")
    public ResponseEntity<List<FavoriteDTO>> getUserFavorites(@PathVariable Long id){
        List<FavoriteDTO> favoriteDTOS = this.favoriteService.getFavoritesById(id);
        return new ResponseEntity<>(favoriteDTOS, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(value = "favorites",produces = "application/json",consumes = "application/json")
    public ResponseEntity<FavoriteDTO> insertFavorite(@RequestBody FavoriteDTO favoriteDTO){
       FavoriteDTO favoriteInserted = this.favoriteService.IntertFavorite(favoriteDTO);
        return new ResponseEntity<>(favoriteInserted, HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping(value = "favorites/{id}")
    public ResponseEntity<?> deleteFavorite(@PathVariable Long id){
        this.favoriteService.deleteFavoriteById(id);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }








}
