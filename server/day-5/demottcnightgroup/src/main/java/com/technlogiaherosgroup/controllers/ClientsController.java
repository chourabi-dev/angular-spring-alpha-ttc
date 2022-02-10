package com.technlogiaherosgroup.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technlogiaherosgroup.entities.Clients;
import com.technlogiaherosgroup.repositories.ClientsRepository;
import com.technlogiaherosgroup.request.ClientModel;

@RestController
@RequestMapping("/clients")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ClientsController {

	
	
	@Autowired
	ClientsRepository clientRepository;
	
	
	@GetMapping("/list")
	public List<Clients> getAll(){
		return this.clientRepository.findAll();
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<?> addNewClient(@RequestBody ClientModel model){
		Clients c = new Clients();
		
		c.setEmail(model.getEmail());
		c.setFirstname(model.getFirstname());
		c.setLastname(model.getLastname());
		
		return ResponseEntity.ok(this.clientRepository.save(c));
		
	}
	
	
	
}
