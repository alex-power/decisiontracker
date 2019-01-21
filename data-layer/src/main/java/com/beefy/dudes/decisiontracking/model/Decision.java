package com.beefy.dudes.decisiontracking.model;

import java.util.Collection;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import org.joda.time.DateTime;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Decision {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  @ManyToOne
  @JoinColumn(name = "fk_owner")
  private User owner;

  private String description;

  private Status status;

  private DateTime createdDate;

  @ManyToMany
  @JoinTable(name = "DECISION_USER", joinColumns = {@JoinColumn(name = "userId")},
      inverseJoinColumns = {@JoinColumn(name = "decisionId")})
  @Column(nullable = true)
  private Collection<User> stakeholders;
  // private final Set<User> decisionMakers; TODO: Different than stakeholders?

  @Embedded
  private Question question;
  @Embedded
  @Column(nullable = true)
  private Answer answer;

  // @OneToMany(mappedBy = "decision")
  // private Collection<Proposal> proposals;

  // private Collection<Approval> approvals;
  // private Map<String, String> classifications;
  @Column(nullable = true)
  private String linkToRequirement;

}
