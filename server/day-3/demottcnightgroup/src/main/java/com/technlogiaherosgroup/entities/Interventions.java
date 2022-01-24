package com.technlogiaherosgroup.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table( name="interventions" )

public class Interventions {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;  
	
	private String descriptino;
	
	private LocalDateTime date = LocalDateTime.now();
	
	
	// MANY TO ONE vehicule !!!
	@ManyToOne()
	@JoinColumn( name="vehicules_id" )
	@JsonIgnore()
	private Vehicule vehicule;


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getDescriptino() {
		return descriptino;
	}


	public void setDescriptino(String descriptino) {
		this.descriptino = descriptino;
	}


	public LocalDateTime getDate() {
		return date;
	}


	public void setDate(LocalDateTime date) {
		this.date = date;
	}


	public Vehicule getVehicule() {
		return vehicule;
	}


	public void setVehicule(Vehicule vehicule) {
		this.vehicule = vehicule;
	}


	public Interventions() {
		super();
	}
	
	
	
	
	
}
