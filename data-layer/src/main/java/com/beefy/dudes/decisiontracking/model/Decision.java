package com.beefy.dudes.decisiontracking.model;

import java.util.Collection;
import java.util.Map;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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

  private Background background;
  private Set<User> stakeholders;
  // private final Set<User> decisionMakers; TODO: Different than stakeholders?

  private Question question;
  private Collection<Proposal> proposals;
  private Answer answer;
  private Collection<Approval> approvals;

  private Map<String, String> classifications;
  private String linkToRequirement;


  public Decision(Background background, Set<User> stakeholders, Question question,
      Collection<Proposal> proposals, Answer answer, Collection<Approval> approvals,
      Map<String, String> classifications, String linkToRequirement) {
    this.background = background;
    this.stakeholders = stakeholders;
    this.question = question;
    this.proposals = proposals;
    this.answer = answer;
    this.approvals = approvals;
    this.classifications = classifications;
    this.linkToRequirement = linkToRequirement;
  }
}
