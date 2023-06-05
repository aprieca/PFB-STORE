package com.kreitek.store.application.service;

import com.kreitek.store.application.dto.FavoriteDTO;
import com.kreitek.store.application.dto.LoginDTO;
import com.kreitek.store.domain.entity.Favorite;
import com.kreitek.store.infrastructure.security.AuthenticationResponse;
import com.kreitek.store.application.dto.UserDTO;

import java.util.Optional;

public interface UserService {
    AuthenticationResponse register(UserDTO request);
    AuthenticationResponse authenticate(LoginDTO request);
    Optional<UserDTO> getUserById(Long id);

}
