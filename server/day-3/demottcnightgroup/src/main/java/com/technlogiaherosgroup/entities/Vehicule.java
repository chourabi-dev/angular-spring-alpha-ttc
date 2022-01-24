package com.technlogiaherosgroup.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table( name="vehicules" )
public class Vehicule {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;  
	private String mark;
	private String model;
	private int puissance; // 7cv
	private String matricule;
	private String color;
	
	
	// one to many
	@OneToMany( mappedBy="vehicule" )
	private List<Interventions> interventions;
	
	
	
	
	public List<Interventions> getInterventions() {
		return interventions;
	}
	public void setInterventions(List<Interventions> interventions) {
		this.interventions = interventions;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getMark() {
		return mark;
	}
	public void setMark(String mark) {
		this.mark = mark;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public int getPuissance() {
		return puissance;
	}
	public void setPuissance(int puissance) {
		this.puissance = puissance;
	}
	public String getMatricule() {
		return matricule;
	}
	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public Vehicule(long id, String mark, String model, int puissance, String matricule, String color) {
		super();
		this.id = id;
		this.mark = mark;
		this.model = model;
		this.puissance = puissance;
		this.matricule = matricule;
		this.color = color;
	}
	public Vehicule() {
		super();
	}
	
	
	
	
	
}
