import { model, Schema } from "mongoose";
import { TExploreProject } from "./exploreProject.interface";

const exploreProjectSchema = new Schema<TExploreProject>({
    name: {type: String, required: true},
    url: {type: String, required: true}
});


export const ExploreProjectModel = model<TExploreProject>("explore-project", exploreProjectSchema);