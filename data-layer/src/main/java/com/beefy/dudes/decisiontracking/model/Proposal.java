package com.beefy.dudes.decisiontracking.model;

import java.util.Collection;
import lombok.Data;

@Data
public class Proposal {
  private final Background background;
  private final Collection<User> votersInAgreement;
}
