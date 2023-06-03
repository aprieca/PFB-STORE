package com.kreitek.store.application.service;

import com.kreitek.store.application.dto.LoginDTO;
import com.kreitek.store.application.securityconfig.AuthenticationResponse;
import com.kreitek.store.application.dto.UserDTO;

public interface UserService {
    AuthenticationResponse register(UserDTO request);
    AuthenticationResponse authenticate(LoginDTO request);
}
