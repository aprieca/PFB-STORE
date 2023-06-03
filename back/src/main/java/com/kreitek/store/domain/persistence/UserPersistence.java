package com.kreitek.store.domain.persistence;

import com.kreitek.store.domain.entity.User;

import java.util.Optional;

public interface UserPersistence {

    User saveUser(User user);
    Optional<User> getUserByUsername(String username);
}
