package com.social.web;

import com.social.model.Supplier;
import com.social.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/searchSuppliers")
public class SuppliersController {
    @Autowired
    SupplierRepository supplierRepository;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String,Object> signUp(@RequestBody Supplier supplier) {
        //supplier.setPassword(bCryptPasswordEncoder.encode(supplier.getPassword()));
        List resList = new ArrayList<Supplier>();
        Map result=new HashMap<String,Object>();
        resList.add(supplier);
        result.put("rc",0);
        result.put("message","OK");
        result.put("results",resList);
       return result;
    }
}
