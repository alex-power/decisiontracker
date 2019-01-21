package com.beefy.dudes.decisiontracking.model;

import java.util.Collection;
import javax.persistence.Column;
import org.joda.time.DateTime;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
// @Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
class Background {

  @Column
  private User owner;

  @Column
  private String description;

  @Column
  // @OneToMany(mappedBy = "background")
  private Collection<Reference> references;

  @Column
  private DateTime createdDate;

  @Column
  // @OneToMany(mappedBy = "background")
  private Collection<Attachment> attachments;

}
