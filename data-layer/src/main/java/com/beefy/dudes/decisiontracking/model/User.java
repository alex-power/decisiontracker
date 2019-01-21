package com.beefy.dudes.decisiontracking.model;

import java.util.Collection;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column
  private Long id;

  private String email;

  private String name;

  @OneToMany(mappedBy = "owner")
  @Column(nullable = true)
  private Collection<Decision> ownedDecisions;

  @ManyToMany(mappedBy = "stakeholders")
  @Column(nullable = true)
  private Collection<Decision> decisions;

  // private NotificationSettings notificationSettings;

}
