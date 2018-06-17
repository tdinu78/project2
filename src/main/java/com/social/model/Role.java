package com.social.model;

import com.social.enums.RolEnum;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "role")
public class Role {
    private Long id;
    private RolEnum roleName;
    private Set<Supplier> suppliers;
    private Set<User> users;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RolEnum getName() {
        return roleName;
    }

    public void setName(RolEnum name) {
        this.roleName = name;
    }

    public RolEnum getRoleName() {
        return roleName;
    }

    public void setRoleName(RolEnum roleName) {
        this.roleName = roleName;
    }

    @ManyToMany(mappedBy = "roles")
    public Set<Supplier> getSuppliers() {
        return suppliers;
    }

    public void setSuppliers(Set<Supplier> suppliers) {
        this.suppliers = suppliers;
    }

    @ManyToMany(mappedBy = "roles")
    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
}
