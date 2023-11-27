package com.pizzaria.backendpizzaria.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pizzaria.backendpizzaria.domain.model.DetalhesPizza;
import com.pizzaria.backendpizzaria.dto.DetalhesPizzaRequestDTO;
import com.pizzaria.backendpizzaria.service.DetalhesPizzaService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/pizza")
public class DetalhesPizzaController {

  private final DetalhesPizzaService detalhesPizzaService;

  @PostMapping("/")
  public ResponseEntity<DetalhesPizza> cadastrarPizza(@RequestBody DetalhesPizza pizza) {
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(detalhesPizzaService.create(pizza));

  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id) {
    if (detalhesPizzaService.deleteById(id)) {

      return ResponseEntity.noContent().<Void>build();

    }
    return ResponseEntity.notFound().build();

  }

  @PutMapping("/{id}")
  public ResponseEntity<DetalhesPizza> update(@PathVariable Long id, @RequestBody DetalhesPizza produto) {
    return ResponseEntity.status(HttpStatus.OK)
        .body(detalhesPizzaService.update(produto, id));
  }

  @GetMapping("/")
  public ResponseEntity<List<DetalhesPizza>> listarProdutos() {

    return ResponseEntity.status(HttpStatus.OK)
        .body(detalhesPizzaService.get());
  }

  @GetMapping("/{id}")
  public ResponseEntity<DetalhesPizza> findById(@PathVariable Long id) {
    return ResponseEntity.status(HttpStatus.OK)
        .body(detalhesPizzaService.buscarPizzaPeloId(id));

  }

  @GetMapping("/find/{pizzaName}")
  public ResponseEntity<DetalhesPizza> findByNome(@PathVariable String pizzaName) {
    return ResponseEntity.status(HttpStatus.OK)
        .body(detalhesPizzaService.findByName(pizzaName));
  }

}
