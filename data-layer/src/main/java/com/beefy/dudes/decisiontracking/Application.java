package com.beefy.dudes.decisiontracking;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.beefy.dudes.decisiontracking.data.UserRepository;
import com.beefy.dudes.decisiontracking.model.User;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootApplication
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

  @Bean
  public CommandLineRunner run(UserRepository users) {
    return (args) -> {
      User user = User.builder().email("test@test.com").name("Test").build();

      log.info("Saving user: {}", user);
      users.save(user);

      log.info("From DB: {}", users.findAll().iterator().next());
    };

  }
}
