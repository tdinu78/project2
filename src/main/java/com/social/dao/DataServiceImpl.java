package com.social.dao;

import com.social.model.Supplier;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;
import java.util.Map;

@Service
public class DataServiceImpl implements DataService {
    @PersistenceContext
    EntityManager em;

    public List<Supplier> getSuppliersByModel(Supplier model){
        CriteriaBuilder builder = em.getCriteriaBuilder();
        CriteriaQuery<Supplier> query = builder.createQuery(Supplier.class);
        Root r = query.from(Supplier.class);
        Predicate predicate = builder.conjunction();
        Map <String,Object> params = model.getNotNullSearchFields();

        for (Map.Entry <String,Object> param: params.entrySet()) {
            predicate = builder.and(predicate,
                    builder.like(r.get(param.getKey()),
                            param.getValue().toString()));
        }
        query.where(predicate);
        List<Supplier> result = em.createQuery(query).getResultList();
        return result;
    }
}
