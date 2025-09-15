package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Data;

public interface DataService {
    Data addData(Data data);
    List<Data> getAllData();
    Data getDataById(int id);   
    void deleteDataById(int id);
}
