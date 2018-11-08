package com.beefy.dudes.decisiontracking.model;

import java.util.Collection;
import org.joda.time.DateTime;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
class Background {
  private final User owner;
  private final String description;
  private final Collection<Reference> references;
  private final DateTime createdDate;
  private final Collection<Attachment> attachments;

}
