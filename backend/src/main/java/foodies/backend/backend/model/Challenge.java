package foodies.backend.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "challenges")
public class Challenge {

    @Id
    private String id;
    private String recipeVideoUrl;
    private String startDate;
    private String startTime;
    private String endTime;
    private String status; // "Pending", "Ongoing", "Completed"
    private List<String> uploadedImages; // Store image URLs

    // Constructors, Getters, and Setters
}