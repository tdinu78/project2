package com.social.repository;

import com.social.model.Supplier;
import com.social.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {

}
