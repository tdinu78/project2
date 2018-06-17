package com.social.repository;

import com.social.model.Supplier;
import com.social.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
    User findByName(String name);

    User findByEmail(String email);
}
