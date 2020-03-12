import { TestimonialDto } from "./../../dto/testimonial.dto";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Testimonial } from "./testimonial.interface";

@Injectable()
export class TestimonialService {
  constructor(
    @InjectModel("Testimonials")
    private readonly testimonialModel: Model<Testimonial>
  ) {}

  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonialModel.find();
  }

  async addTestimonial(createTestimonial: TestimonialDto) {
    const newTestimonial = new this.testimonialModel(createTestimonial);
    return await newTestimonial.save();
  }

  async updateTestimonial(id: string, updateTestimonial: TestimonialDto) {
    const updtTestimonial = await this.testimonialModel.findOne({ _id: id });
    Object.assign(updtTestimonial, updateTestimonial);

    return updtTestimonial.save();
  }

  async removeTestimonial(id: string) {
    await this.testimonialModel.findOneAndDelete({ _id: id });
    return "item deleted!";
  }
}
