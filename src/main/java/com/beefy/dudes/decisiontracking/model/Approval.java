package com.beefy.dudes.decisiontracking.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Approval {
  private final Background background;
  private final boolean approved;
  private final boolean required;
}
