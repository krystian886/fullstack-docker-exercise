package com.example.backend.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final DataRepository dataRepository;

    @Autowired
    public DataLoader(DataRepository dataRepository) {
        this.dataRepository = dataRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        var toInsert1 = new Data("Ford", "T");
        var toInsert2 = new Data("BMW", "X5");
        var toInsert3 = new Data("Audi", "a3");

        this.dataRepository.save(toInsert1);
        this.dataRepository.save(toInsert2);
        this.dataRepository.save(toInsert3);
    }
}
