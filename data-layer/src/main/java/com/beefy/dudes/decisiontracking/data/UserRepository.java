package com.beefy.dudes.decisiontracking.data;

import org.springframework.data.repository.CrudRepository;
import com.beefy.dudes.decisiontracking.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
