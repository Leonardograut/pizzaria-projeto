package com.pizzaria.backendpizzaria.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.pizzaria.backendpizzaria.domain.model.DetalhesPizza;
import com.pizzaria.backendpizzaria.domain.repository.DetalhesPizzaRepository;


import jakarta.persistence.EntityNotFoundException;




@Service
public class DetalhesPizzaService {
  
    
    private final DetalhesPizzaRepository detalhesPizzaRepository;


    public DetalhesPizzaService(DetalhesPizzaRepository detalhesPizzaRepository){
        this.detalhesPizzaRepository = detalhesPizzaRepository;

    }



    public  DetalhesPizza create(DetalhesPizza pizza) {
        return detalhesPizzaRepository.save(pizza);
    
    }


   
    public boolean deleteById(Long id){
       return detalhesPizzaRepository.findById(id)
       .map(delete->{
        detalhesPizzaRepository.deleteById(id);
         return true;
       })
       .orElse(false);


  }



public DetalhesPizza buscarPizzaPeloId(Long id) throws EntityNotFoundException {
    return detalhesPizzaRepository.findById(id)
    .orElseThrow(() -> new EntityNotFoundException("Nenhum objeto encontrado com o ID: " + id));
}



  public DetalhesPizza update(DetalhesPizza pizza, Long id) throws NoSuchElementException {
    return detalhesPizzaRepository.findById(id)
            .map(p -> {
                p.setPizzaName(pizza.getPizzaName());
                p.setPizzaDetails(pizza.getPizzaDetails());
                p.setPizzaPrice(pizza.getPizzaPrice());
                p.setPizzaImg(pizza.getPizzaImg());
                return detalhesPizzaRepository.save(p);
            })
            .orElseThrow(() -> new NoSuchElementException("Nenhum objeto encontrado com o ID: " + id + ". Não foi possível realizar a atualização."));
}




   public  List<DetalhesPizza> get(){

     return detalhesPizzaRepository.findAll();
   }


    public DetalhesPizza findByName(String nome) {
        List<DetalhesPizza> pizzas = detalhesPizzaRepository.findByNome(nome);
    
        for (DetalhesPizza p : pizzas) {
            if (p.getPizzaName().equalsIgnoreCase(nome)) {
                return p;
            }
        }
    
        return null;
    }
    

  }



  







