package com.maryana.eplanoback;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PlanosemestraltrabalhoBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(PlanosemestraltrabalhoBackApplication.class, args);
    }

    /*public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/formularios").allowedOrigins("http://localhost:9000");
            }
        };
    }*/
}
