package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student_table")
public class Data {
    @Id
    @Column(name = "student_id")
    private int id;

    @Column(name = "student_name", nullable = false, length = 50)
    private String name;

    @Column(name = "student_department", nullable = false, length = 20)
    private String department; // branch

    @Column(name = "student_contact", nullable = false, unique = true, length = 20)
    private String contact;

    // Getters and Setters
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }
    public void setDepartment(String department) {
        this.department = department;
    }

    public String getContact() {
        return contact;
    }
    public void setContact(String contact) {
        this.contact = contact;
    }

    @Override
    public String toString() {
        return "Student [id=" + id + ", name=" + name + ", department=" + department + ", contact=" + contact + "]";
    }
}


