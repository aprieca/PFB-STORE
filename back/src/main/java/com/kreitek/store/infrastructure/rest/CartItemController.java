package com.kreitek.store.infrastructure.rest;

import com.kreitek.store.application.dto.CartItemDTO;
import com.kreitek.store.application.service.CartItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CartItemController {

    private final CartItemService cartItemService;

    @CrossOrigin
    @GetMapping(value = "users/{id}/cart",produces = "application/json")
    public ResponseEntity<List<CartItemDTO>> getUserCart (@PathVariable Long id){
        List<CartItemDTO> cartItemDTOS = this.cartItemService.getCartItemsByUserId(id);
        return new ResponseEntity<>(cartItemDTOS, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(value = "cart/items",produces = "application/json",consumes = "application/json")
    public ResponseEntity<CartItemDTO> insertCartItem(@RequestBody CartItemDTO cartItemDTO){
        this.cartItemService.insertCartItem(cartItemDTO);
        return new ResponseEntity<>(cartItemDTO,HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping(value = "cart/items/{id}")
    public ResponseEntity<?> deleteCartItem(@PathVariable Long id){
        this.cartItemService.deleteCartItem(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @CrossOrigin
    @DeleteMapping(value = "users/{id}/cart/items")
    public ResponseEntity<?> deleteAllCartItemsByUserId(@PathVariable Long userId){
        this.cartItemService.deleteAllCartItemsByUserId(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}


