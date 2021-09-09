package com.juliocesarmj.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.juliocesarmj.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
