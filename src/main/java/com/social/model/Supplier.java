package com.social.model;

import com.social.enums.LifeCycle;

import javax.persistence.*;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@Entity
public class Supplier {
    private String name;
    private String email;
    private String password;
    private boolean agreedTerms;
    private Set<Role> roles;
    private ZonedDateTime memeberSince;
    private ZonedDateTime lastActive;
    private LifeCycle lifecycle;
    private Set<Picture>pictures;
    private String place;
    private String minPrice;
    private String minInv;
    private String maxInv;
    private boolean outdoor;
    private boolean accommodation;
    private boolean fireworks;
    private boolean events;
    private boolean preparations;
    private boolean parking;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Id
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isAgreedTerms() {
        return agreedTerms;
    }

    public void setAgreedTerms(boolean agreedTerms) {
        this.agreedTerms = agreedTerms;
    }

    @ManyToMany
    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public ZonedDateTime getMemeberSince() {
        return memeberSince;
    }

    public void setMemeberSince(ZonedDateTime memeberSince) {
        this.memeberSince = memeberSince;
    }

    public ZonedDateTime getLastActive() {
        return lastActive;
    }

    public void setLastActive(ZonedDateTime lastActive) {
        this.lastActive = lastActive;
    }

    public LifeCycle getLifecycle() {
        return lifecycle;
    }

    public void setLifecycle(LifeCycle lifecycle) {
        this.lifecycle = lifecycle;
    }
    @OneToMany(mappedBy="supplier")
    public Set<Picture> getPictures() {
        return pictures;
    }

    public void setPictures(Set<Picture> pictures) {
        this.pictures = pictures;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getMinPrice() {
        return minPrice;
    }

    public void setMinPrice(String minPrice) {
        this.minPrice = minPrice;
    }

    public String getMinInv() {
        return minInv;
    }

    public void setMinInv(String minInv) {
        this.minInv = minInv;
    }

    public String getMaxInv() {
        return maxInv;
    }

    public void setMaxInv(String maxInv) {
        this.maxInv = maxInv;
    }

    public boolean isOutdoor() {
        return outdoor;
    }

    public void setOutdoor(boolean outdoor) {
        this.outdoor = outdoor;
    }

    public boolean isAccommodation() {
        return accommodation;
    }

    public void setAccommodation(boolean accommodation) {
        this.accommodation = accommodation;
    }

    public boolean isFireworks() {
        return fireworks;
    }

    public void setFireworks(boolean fireworks) {
        this.fireworks = fireworks;
    }

    public boolean isEvents() {
        return events;
    }

    public void setEvents(boolean events) {
        this.events = events;
    }

    public boolean isPreparations() {
        return preparations;
    }

    public void setPreparations(boolean preparations) {
        this.preparations = preparations;
    }

    public boolean isParking() {
        return parking;
    }

    public void setParking(boolean parking) {
        this.parking = parking;
    }

    @Transient
    public Map<String,Object> getNotNullSearchFields(){
        Map<String, Object> result = new HashMap();
        if(name != null) result.put("name",name);
        if(place != null) result.put("name",name);
        if(minPrice != null) result.put("name",name);
        if(minInv != null) result.put("name",name);
        if(maxInv != null) result.put("name",name);
        if(outdoor) result.put("outdoor",outdoor);
        if(accommodation ) result.put("accommodation",accommodation);
        if(fireworks) result.put("fireworks",fireworks);
        if(events) result.put("events",events);
        if(preparations) result.put("preparations",preparations);
        if(parking) result.put("parking",parking);

        return result;
    }
}
