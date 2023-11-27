package com.pizzaria.backendpizzaria.dto;

import com.pizzaria.backendpizzaria.domain.model.DetalhesPizza;

import lombok.Data;

@Data
public class DetalhesPizzaRequestDTO {
    public DetalhesPizzaRequestDTO(DetalhesPizza save) {
    }
    private String pizzaName;
    private String pizzaDetails;
    private Double pizzaPrice;
    private String pizzaImg;




    
   
}

