package foodies.backend.backend.repository;

import foodies.backend.backend.model.Challenge;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ChallengeRepository extends MongoRepository<Challenge, String> {
}
