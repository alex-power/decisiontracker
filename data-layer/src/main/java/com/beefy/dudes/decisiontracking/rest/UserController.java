package com.beefy.dudes.decisiontracking.rest;

import java.util.Collection;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.beefy.dudes.decisiontracking.data.UserRepository;
import com.beefy.dudes.decisiontracking.model.User;
import com.google.common.collect.Sets;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@AllArgsConstructor
@Slf4j
public class UserController {
  private final AtomicLong counter = new AtomicLong();

  private final UserRepository users;

  @GetMapping("/users")
  @CrossOrigin(origins = "http://localhost:3001")
  public Collection<User> getAllUsers() {
    Collection<User> userSet = Sets.newHashSet();
    for (User user : users.findAll()) {
      userSet.add(user);
    }
    log.info("Returning all users. Size: {}. RequestId: {}", userSet.size(),
        counter.incrementAndGet());
    return userSet;
  }

}
