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

import com.technlogiaherosgroup.entities.Interventions;
import com.technlogiaherosgroup.repositories.InterventionsRepository;
import com.technlogiaherosgroup.repositories.VehiculeRepository;
import com.technlogiaherosgroup.request.InterventionModel;

@RestController
@RequestMapping("/interventions")
@CrossOrigin(origins = "*", maxAge = 3600)
public class InterventionsController {

	@Autowired
	InterventionsRepository interventionsRepository;
	
	
	@Autowired
	VehiculeRepository vehiculeRepository;
	
	@GetMapping("/list")
	public List<Interventions> getAll(){
		return this.interventionsRepository.findAll();
		
	}
	
	
	
	@PostMapping("/add")
	public ResponseEntity<?> add(@RequestBody InterventionModel model  ){
		Interventions i = new Interventions();
		
		i.setDescriptino(model.getDescription());
		
		i.setVehicule( this.vehiculeRepository.findById(model.getVehicule()).get() );
		
		
		
		return ResponseEntity.ok(this.interventionsRepository.save(i));
		
		
	}
	
	
	
	
}
