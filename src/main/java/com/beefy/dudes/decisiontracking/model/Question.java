package com.beefy.dudes.decisiontracking.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Question {
  private final Background background;
  private final Status status;
}
