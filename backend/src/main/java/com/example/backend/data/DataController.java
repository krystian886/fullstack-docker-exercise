package com.example.backend.data;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/data")
public class DataController
{
    private final DataControllerService dataControllerService;

    public DataController(DataControllerService dataControllerService) {
        this.dataControllerService = dataControllerService;
    }

    @GetMapping("")
    public List<Data> all() {
        return dataControllerService.all();
    }
}