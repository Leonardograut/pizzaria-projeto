package com.pizzaria.backendpizzaria.domain.model;

import com.pizzaria.backendpizzaria.dto.DetalhesPizzaRequestDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class DetalhesPizza {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private Long id;
    private String pizzaName;
    private String pizzaDetails;
    private Double pizzaPrice;
    private String pizzaImg;


    public DetalhesPizza(DetalhesPizzaRequestDTO detalhesDTO){
        pizzaName = detalhesDTO.getPizzaName();
        pizzaDetails=detalhesDTO.getPizzaDetails();
        pizzaPrice = detalhesDTO.getPizzaPrice();
        pizzaImg = detalhesDTO.getPizzaImg();
        

    }


   
    
}
