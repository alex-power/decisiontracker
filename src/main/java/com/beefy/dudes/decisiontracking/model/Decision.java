package com.beefy.dudes.decisiontracking.model;

import java.util.Collection;
import java.util.Map;
import java.util.Set;
import lombok.Data;

@Data
public class Decision {
  private final Background background;
  private final Set<User> stakeholders;
  // private final Set<User> decisionMakers; TODO: Different than stakeholders?

  private final Question question;
  private final Collection<Proposal> proposals;
  private final Answer answer;
  private final Collection<Approval> approvals;

  private final Map<String, String> classifications;
  private final String linkToRequirement;

}
