package com.social.dao;

import com.social.model.Supplier;
import org.springframework.context.annotation.Bean;

import java.util.List;


public interface DataService {

    List<Supplier> getSuppliersByModel(Supplier model);
}
