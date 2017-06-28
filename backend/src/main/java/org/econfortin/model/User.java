package org.econfortin.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Builder;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@Builder
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long userId;
	private String firstName;
	private String lastName;
	private String userName;
	private String password;
	
	@CreationTimestamp
	private LocalDate created;
	
	@OneToMany(mappedBy="user", cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonManagedReference
	private List<Photo> photoList;
	
	@ManyToMany
	private List<Photo> likedPhotoList;
	
}
