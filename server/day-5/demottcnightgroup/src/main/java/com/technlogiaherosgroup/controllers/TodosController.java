package com.technlogiaherosgroup.controllers;

import java.util.List;
import java.util.NoSuchElementException;

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

import com.technlogiaherosgroup.entities.Todo;
import com.technlogiaherosgroup.repositories.TodoRepository;
import com.technlogiaherosgroup.request.TodoModel;
import com.technlogiaherosgroup.response.JsonResponse;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "*", maxAge = 3600)
public class TodosController {

	@Autowired
	TodoRepository todoRepository;
	
	
	@PostMapping("/add")
	public ResponseEntity<?> createTodo(@RequestBody TodoModel model) {
		
		// CREATE NEW ENETITY !!
		Todo todo = new Todo();
		
		// SET the entity data !!
		todo.setTitle(model.getTitle());
		todo.setContent(model.getContent());
		
		// SAVE THE ENTITY !!!!
		// :)
		this.todoRepository.save(todo);
		JsonResponse res= new JsonResponse();
		res.setMessage("data inertted successfully !!");
		res.setSuccess(true);
		return ResponseEntity.ok(res); // 200
		
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete( @PathVariable() long id ){
		// SELECT ... WHERE ID = ?
		
		
		try {
			Todo old = this.todoRepository.findById(id).get();
			
			this.todoRepository.delete(old);
			JsonResponse res= new JsonResponse();
			res.setMessage("data deleted successfully !!");
			res.setSuccess(true);
			return ResponseEntity.ok(res);
		}catch(NoSuchElementException e) {
			JsonResponse res= new JsonResponse();
			res.setMessage("no such element");
			res.setSuccess(true);
			return ResponseEntity.ok(res);
		}catch(Exception x) {
			JsonResponse res= new JsonResponse();
			res.setMessage("Something went wrong.");
			res.setSuccess(true);
			return ResponseEntity.ok(res);
		}
		
		
		
	}
	
	
	
	// listing SELECT
	@GetMapping("/list")
	public List<Todo> getAll(){
		return this.todoRepository.findAll();
	}
	
	
	
	
	@PostMapping("/update/{id}")
	public ResponseEntity<?> update( @PathVariable() long id , @RequestBody TodoModel model ){
		// SELECT ... WHERE ID = ?
		
		try {
			Todo old = this.todoRepository.findById(id).get();
			
			old.setTitle(model.getTitle());
			old.setContent(model.getContent());
			
			this.todoRepository.save(old);
			
			
			
			JsonResponse res= new JsonResponse();
			res.setMessage("data updated successfully !!");
			res.setSuccess(true);
			return ResponseEntity.ok(res);
		}catch(NoSuchElementException e) {
			JsonResponse res= new JsonResponse();
			res.setMessage("no such element");
			res.setSuccess(true);
			return ResponseEntity.ok(res);
		}catch(Exception x) {
			JsonResponse res= new JsonResponse();
			res.setMessage("Something went wrong.");
			res.setSuccess(true);
			return ResponseEntity.ok(res);
		}
	}
}
