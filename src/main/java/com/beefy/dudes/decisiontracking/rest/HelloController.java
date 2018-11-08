package com.beefy.dudes.decisiontracking.rest;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.beefy.dudes.decisiontracking.model.Greeting;

@Controller
public class HelloController {
  private static final String template = "Hello, %s!";
  private final AtomicLong counter = new AtomicLong();

  @GetMapping("/hello-world")
  @ResponseBody
  public Greeting sayHello(
      @RequestParam(name = "name", required = false, defaultValue = "Stranger") String name) {
    return new Greeting(counter.incrementAndGet(), String.format(template, name));
  }
}
