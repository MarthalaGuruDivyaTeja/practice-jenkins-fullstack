package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JenkinsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(JenkinsBackendApplication.class, args);
		System.out.println("Project is Running ...");
	}

}
