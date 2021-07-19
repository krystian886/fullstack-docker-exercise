package com.example.backend.data;


import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "app_data")
@NoArgsConstructor
@Getter @Setter
public class Data {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long dataId;

    @Basic(optional = false)
    private String producer;

    @Basic(optional = false)
    private String model;

    public Data(String producer, String model) {
        this.producer = producer;
        this.model = model;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Data)) return false;
        Data data = (Data) o;
        return Objects.equals(getDataId(), data.getDataId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getDataId());
    }
}
