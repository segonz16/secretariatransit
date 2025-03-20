package com.education.transit.service;

import com.education.transit.models.Infraccion;
import com.education.transit.repository.InfraccionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InfraccionService {

    @Autowired
    private InfraccionRepository infraccionRepository;

    public Infraccion create(Infraccion infraccion) {
        return infraccionRepository.save(infraccion);
    }

    public boolean existsById(String id) {
        return infraccionRepository.existsById(id);
    }

    public List findByPlaca(String placa) {
        return infraccionRepository.findByPlaca(placa);
    }


}
