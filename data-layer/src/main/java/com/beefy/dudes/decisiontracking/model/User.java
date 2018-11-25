package com.beefy.dudes.decisiontracking.model;

import lombok.Data;

@Data
public class User {
  private final String email;
  private final String name;
  private final String role;
  private final NotificationSettings notificationSettings;

}
