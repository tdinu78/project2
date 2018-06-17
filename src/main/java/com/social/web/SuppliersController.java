package com.social.web;

import com.social.model.Supplier;
import com.social.repository.SupplierRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/suppliers")
public class SuppliersController {

    private SupplierRepository supplierRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/sign-up")
    public void signUp(@RequestBody Supplier supplier) {
        supplier.setPassword(bCryptPasswordEncoder.encode(supplier.getPassword()));
        supplierRepository.save(supplier);
    }
}
