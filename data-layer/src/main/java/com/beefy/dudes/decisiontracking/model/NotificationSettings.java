package com.beefy.dudes.decisiontracking.model;

import java.util.Map;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
// @Entity
public class NotificationSettings {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  private Map<String, String> settings;

}
