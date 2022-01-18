package com.technlogiaherosgroup.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.technlogiaherosgroup.entities.Todo;

public interface TodoRepository extends JpaRepository<Todo,Long> {

}
