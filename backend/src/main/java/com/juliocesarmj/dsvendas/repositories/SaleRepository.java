package com.juliocesarmj.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.juliocesarmj.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
