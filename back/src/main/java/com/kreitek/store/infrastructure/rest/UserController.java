package com.kreitek.store.infrastructure.rest;

import com.kreitek.store.application.dto.LoginDTO;
import com.kreitek.store.application.dto.UserDTO;
import com.kreitek.store.domain.entity.User;
import com.kreitek.store.infrastructure.security.AuthenticationResponse;
import com.kreitek.store.application.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @CrossOrigin
    @PostMapping("/auth/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody UserDTO request
    ){
        return ResponseEntity.ok(userService.register(request));
    }

    @CrossOrigin
    @PostMapping("/auth/authenticate")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody LoginDTO request
    ){
        return ResponseEntity.ok(userService.authenticate(request));
    }

    @CrossOrigin
    @GetMapping("/users/{id}")
    public ResponseEntity<UserDTO> GetUserById(@PathVariable Long id){
        Optional<UserDTO> user = this.userService.getUserById(id);
        if(user.isPresent()){
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        }else {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }
}
