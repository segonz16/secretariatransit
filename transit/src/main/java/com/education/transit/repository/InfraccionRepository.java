package com.education.transit.repository;

import com.education.transit.models.Infraccion;
import com.education.transit.models.Matricula;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InfraccionRepository extends JpaRepository<Infraccion, String> {

    boolean existsById(String id);

    List<Infraccion> findByPlaca(String placa);
}
