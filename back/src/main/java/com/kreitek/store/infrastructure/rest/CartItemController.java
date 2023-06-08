package com.kreitek.store.infrastructure.rest;

import com.kreitek.store.application.dto.CartItemDTO;
import com.kreitek.store.application.service.CartItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
        return new ResponseEntity<>(cartItemDTO,HttpStatus.CREATED);
    }

    @CrossOrigin
    @PatchMapping(value = "cart/items/{id}/quantity/{quantity}",produces = "application/json")
    public ResponseEntity<CartItemDTO> updateCartItemQuantity(@PathVariable Long id, @PathVariable int quantity){
        Optional<CartItemDTO> cartItemDTO = this.cartItemService.findCartItemById(id);
        if (cartItemDTO.isPresent()){
            CartItemDTO requestedDto = cartItemDTO.get();
            requestedDto.setQuantity(quantity);
            this.cartItemService.updateCartItem(requestedDto);
            return new ResponseEntity<>(requestedDto,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }
    @CrossOrigin
    @DeleteMapping(value = "cart/items/{id}")
    public ResponseEntity<?> deleteCartItem(@PathVariable Long id){
        this.cartItemService.deleteCartItem(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @CrossOrigin
    @DeleteMapping(value = "users/{id}/cart/items")
    public ResponseEntity<?> deleteAllCartItemsByUserId(@PathVariable Long id){
        this.cartItemService.deleteAllCartItemsByUserId(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}


