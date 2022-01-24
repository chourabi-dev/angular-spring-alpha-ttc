package com.technlogiaherosgroup.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.technlogiaherosgroup.request.EmployeeModel;

@RequestMapping("/app")
@RestController
public class AppController {
	
	
	@GetMapping("/hello")
	public String sayhello() {
		return "hello world";
	}
	
	
	@GetMapping("/somme")
	public int somme( @RequestParam( required = true ) int x,  @RequestParam( required = true ) int y ) {
		return (x+y);
	}
	
	
	@GetMapping("/employees")
	public void employees( @RequestParam( required = false ) int year ) {
		// if year == null = > return all employees BUT year != null !!!! WHERE year = ?
	}
	
	
	@GetMapping("/employee/details/{id}")
	public void findEmployeeById(@PathVariable( name="id" ) String employeeID) {
		System.out.print(employeeID);
		
	}
	
	
	@PostMapping("/employee/add")
	public void addEmployee(@RequestBody EmployeeModel model ) {
		
		System.out.println(model.getEmail());
		System.out.println(model.getFullname());
		
		// CREATE ENEITY
		
		// INSERT DATABSE
		
		// return success true !! 
		
	}

}
