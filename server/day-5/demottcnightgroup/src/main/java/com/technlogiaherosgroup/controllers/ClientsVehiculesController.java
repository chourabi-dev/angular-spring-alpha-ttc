package com.technlogiaherosgroup.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technlogiaherosgroup.entities.Clients;
import com.technlogiaherosgroup.entities.ClientsVehicules;
import com.technlogiaherosgroup.entities.Vehicule;
import com.technlogiaherosgroup.repositories.ClientsRepository;
import com.technlogiaherosgroup.repositories.ClientsVehiculesRepository;
import com.technlogiaherosgroup.repositories.VehiculeRepository;
import com.technlogiaherosgroup.request.VehiculeClientModel;

@RestController
@RequestMapping("/vehicules-clients")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ClientsVehiculesController {

	@Autowired
	ClientsVehiculesRepository clientsVehiculesRepository;
	
	@Autowired
	ClientsRepository clientsRepository;
	
	@Autowired
	VehiculeRepository vehiculeRepository;
	
	
	
	
	//get list of vehicule by client id !!!
	
	@GetMapping("/list/{id}")
	public List<ClientsVehicules> findVehiculesByClientId(@PathVariable long id){
		
		Clients client = this.clientsRepository.findById(id).get();
		
		return this.clientsVehiculesRepository.findByClient(client);
		
		
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<?> add( @RequestBody VehiculeClientModel model ){
		Clients client = this.clientsRepository.findById(model.getClient()).get();
		Vehicule vehicule = this.vehiculeRepository.findById(model.getVehicule()).get();
		
		ClientsVehicules tmp = new ClientsVehicules();
		
		tmp.setClient(client);
		tmp.setVehicule(vehicule);
		
		
		return ResponseEntity.ok(this.clientsVehiculesRepository.save(tmp));
	}
}
