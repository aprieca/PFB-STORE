package com.kreitek.store.application.service;

import com.kreitek.store.application.dto.LoginDTO;
import com.kreitek.store.application.dto.RegisterDTO;
import com.kreitek.store.infrastructure.security.AuthenticationResponse;

import java.util.Optional;

public interface UserService {
    AuthenticationResponse register(RegisterDTO request);
    AuthenticationResponse authenticate(LoginDTO request);
    Optional<RegisterDTO> getUserById(Long id);

}
