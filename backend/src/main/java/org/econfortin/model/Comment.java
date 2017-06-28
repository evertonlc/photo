package org.econfortin.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Builder
public class Comment {

	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private Long commentId;
	private String content;
	
	@ManyToOne
	@JsonIgnoreProperties
	private Photo photo;
	
	private Long photoId;
	private String userName;
	
	
}