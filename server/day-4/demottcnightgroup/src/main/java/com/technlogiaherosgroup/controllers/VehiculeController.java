package com.technlogiaherosgroup.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.technlogiaherosgroup.entities.Vehicule;
import com.technlogiaherosgroup.repositories.VehiculeRepository;
import com.technlogiaherosgroup.request.VehiculeModel;
import com.technlogiaherosgroup.response.JsonResponse;

@RestController
@RequestMapping("/vehicules")
@CrossOrigin(origins = "*", maxAge = 3600)
public class VehiculeController {

	
	@Autowired
	VehiculeRepository vehiculeRepository;
	
	// GET
	
	@GetMapping("/list")
	List<Vehicule> getALL(){
		return this.vehiculeRepository.findAll();
	}
	
	
	
	// POST
	@PostMapping("/add")
	public ResponseEntity<?> add( @RequestBody VehiculeModel model ){
		Vehicule v = new Vehicule();
		
		v.setMark(model.getMark());
		v.setModel(model.getModel());
		v.setPuissance(model.getPuissance());
		v.setColor(model.getColor());
		v.setMatricule(model.getMatricule());
		
		return ResponseEntity.ok(this.vehiculeRepository.save(v));
	}
	
	
	
	// POST
	@PostMapping("/update/{id}")
	public ResponseEntity<?> update( @RequestBody VehiculeModel model, @PathVariable long id ){
		Vehicule v = this.vehiculeRepository.findById(id).get();
		
		v.setMark(model.getMark());
		v.setModel(model.getModel());
		v.setPuissance(model.getPuissance());
		v.setColor(model.getColor());
		v.setMatricule(model.getMatricule());
		
		return ResponseEntity.ok(this.vehiculeRepository.save(v));
	}
	
	
	
	// POST
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable long id ){
		Vehicule v = this.vehiculeRepository.findById(id).get();
		
		this.vehiculeRepository.delete(v);
		
		
		
		JsonResponse res= new JsonResponse();
		res.setMessage("deleted successfully");
		res.setSuccess(true);
		return ResponseEntity.ok(res);
		
	}
	
	
	
	
	
	
	
	
	
	
	
}
