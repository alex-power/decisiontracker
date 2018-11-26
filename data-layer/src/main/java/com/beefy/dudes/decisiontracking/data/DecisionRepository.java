package com.beefy.dudes.decisiontracking.data;

import org.springframework.data.repository.CrudRepository;
import com.beefy.dudes.decisiontracking.model.Decision;

public interface DecisionRepository extends CrudRepository<Decision, Long> {

}
