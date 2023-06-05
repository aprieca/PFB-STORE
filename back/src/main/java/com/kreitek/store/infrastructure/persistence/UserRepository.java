package com.kreitek.store.infrastructure.persistence;

import com.kreitek.store.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findByUsername(String username);
    Optional<User> findById(Long id);
}
