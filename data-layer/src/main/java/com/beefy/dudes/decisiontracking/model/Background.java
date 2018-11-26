package com.beefy.dudes.decisiontracking.model;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import org.joda.time.DateTime;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
class Background {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private User owner;
  private String description;
  private List<Reference> references;
  private DateTime createdDate;
  private List<Attachment> attachments;

}
