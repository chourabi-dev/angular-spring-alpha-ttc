package com.technlogiaherosgroup.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

	
	@Entity
	@Table( name="clients_vehicules" )

	public class ClientsVehicules {

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private long id;
		
		@ManyToOne
		@JoinColumn( name="vehicules_id" )
		private Vehicule vehicule;
		
		
		@ManyToOne
		@JoinColumn( name="clients_id" )
		private Clients client;
		
		private LocalDateTime date = LocalDateTime.now();  // DEFAULT VALUE

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public Vehicule getVehicule() {
			return vehicule;
		}

		public void setVehicule(Vehicule vehicule) {
			this.vehicule = vehicule;
		}

		public Clients getClient() {
			return client;
		}

		public void setClient(Clients client) {
			this.client = client;
		}

		public LocalDateTime getDate() {
			return date;
		}

		public void setDate(LocalDateTime date) {
			this.date = date;
		}

		public ClientsVehicules() {
			super();
		}
		
		
		
		
}
