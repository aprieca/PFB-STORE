package com.kreitek.store.infrastructure.rest;

import com.kreitek.store.application.dto.LoginDTO;
import com.kreitek.store.application.dto.UserDTO;
import com.kreitek.store.application.securityconfig.AuthenticationResponse;
import com.kreitek.store.application.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}
