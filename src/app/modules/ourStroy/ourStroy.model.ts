import { Schema } from 'mongoose';
import { TOurStory } from './ourStory.interface';
import { model } from 'mongoose';

const ourStorySchema = new Schema<TOurStory>({
  storyBannerImage: { type: String, required: true },
  foundationImage: { type: String, required: true },
  foundationTitle: { type: String, required: true },
  foundationDescriptionFirst: { type: String, required: true },
  foundationDescriptionSecond: { type: String, required: true },
  foundationDescriptionReadMore: { type: String, required: true },
  whoWeAreFirstDescription: { type: String, required: true },
  whoWeAreSecondDescription: { type: String, required: true },
  logoImage: { type: String, required: true },
  logoDescriptionFirst: { type: String, required: true },
  logoDescriptionSecond: { type: String, required: true },
  logoDescriptionThird: { type: String, required: true },
  visionTitle: { type: String, required: true },
  visionImage: { type: String, required: true },
  missionTitle: { type: String, required: true },
  misssionImage: { type: String, required: true },
  valueImage: { type: String, required: true },
  valueDescription: { type: String, required: true }
});


export const OurStoryModel = model<TOurStory>("ourStory", ourStorySchema);
