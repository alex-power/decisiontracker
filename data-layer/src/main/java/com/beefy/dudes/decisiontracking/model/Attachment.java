package com.beefy.dudes.decisiontracking.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Attachment {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
}
