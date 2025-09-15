package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Data;
import com.example.demo.service.DataService;

@RestController
@RequestMapping("/data-api")
@CrossOrigin(origins = "*")
public class DataController {

    @Autowired
    private DataService dataService;

    // ✅ Add Data
    @PostMapping("/add")
    public ResponseEntity<Data> addData(@RequestBody Data data) {
        Data savedData = dataService.addData(data);
        return new ResponseEntity<>(savedData, HttpStatus.CREATED);
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<Data>> getAllData() {
        List<Data> students = dataService.getAllData();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    // ✅ Delete Data
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteData(@PathVariable int id) {
        Data existing = dataService.getDataById(id);
        if (existing != null) {
            dataService.deleteDataById(id);
            return new ResponseEntity<>("Data with ID " + id + " deleted successfully.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Cannot delete. Data with ID " + id + " not found.", HttpStatus.NOT_FOUND);
        }
    }
}
