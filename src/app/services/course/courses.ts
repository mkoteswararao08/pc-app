export interface Courses{
    courses: [{ courseId, name, description, topics:[{topicId, name,videoId, videoURL, code, projectUrl}]}];
}