package com.example.backend.data;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DataControllerService{

    private final DataRepository dataRepository;

    public DataControllerService(DataRepository dataRepository) {
        this.dataRepository = dataRepository;
    }

    public List<Data> all() {
        return dataRepository.findAll();
    }
}
