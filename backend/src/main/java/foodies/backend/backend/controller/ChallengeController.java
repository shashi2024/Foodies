package foodies.backend.backend.controller;

import foodies.backend.backend.model.Challenge;
import foodies.backend.backend.service.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/challenges")
@CrossOrigin("*")
public class ChallengeController {

    @Autowired
    private ChallengeService challengeService;

    @GetMapping
    public List<Challenge> getChallenges() {
        return challengeService.getAllChallenges();
    }

    @PostMapping
    public Challenge createChallenge(@RequestBody Challenge challenge) {
        return challengeService.createChallenge(challenge);
    }

    @DeleteMapping("/{id}")
    public void deleteChallenge(@PathVariable String id) {
        challengeService.deleteChallenge(id);
    }
}