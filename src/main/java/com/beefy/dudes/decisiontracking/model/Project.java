package com.beefy.dudes.decisiontracking.model;

import java.util.Collection;
import lombok.Data;

@Data
public class Project {
  private final Collection<Decision> decisions;
  private final Collection<User> users;
}
