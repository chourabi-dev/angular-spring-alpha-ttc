package com.technlogiaherosgroup.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technlogiaherosgroup.entities.Clients;
import com.technlogiaherosgroup.entities.ClientsVehicules;

public interface ClientsVehiculesRepository extends JpaRepository<ClientsVehicules,Long> {

	public List<ClientsVehicules> findByClient(Clients client);
}
