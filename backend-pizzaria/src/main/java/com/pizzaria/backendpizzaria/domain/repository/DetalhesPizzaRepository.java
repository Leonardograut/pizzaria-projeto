package com.pizzaria.backendpizzaria.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pizzaria.backendpizzaria.domain.model.DetalhesPizza;



public interface DetalhesPizzaRepository  extends JpaRepository<DetalhesPizza,Long>{

   
    

    
     @Query("select p from DetalhesPizza p where p.pizzaName like %?1%")
     List<DetalhesPizza>findByNome(String pizzaName);
}
