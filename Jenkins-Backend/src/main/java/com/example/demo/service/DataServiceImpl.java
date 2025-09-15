package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Data;
import com.example.demo.repository.DataRepository;


@Service
public class DataServiceImpl implements DataService {

    @Autowired
    private DataRepository studentRepository;

    @Override
    public Data addData(Data data) {
        return studentRepository.save(data);
    }

    @Override
    public List<Data> getAllData() {
        return studentRepository.findAll();
    }
    
    @Override
    public Data getDataById(int id) {
        Optional<Data> opt = studentRepository.findById(id);
        return opt.orElse(null);
    }
 
    @Override
    public void deleteDataById(int id) {
        studentRepository.deleteById(id);
    }


}
