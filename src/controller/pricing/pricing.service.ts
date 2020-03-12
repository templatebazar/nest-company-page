import { PricingDto } from "./../../dto/pricing.dto";
// import { TestimonialDto } from "./../../dto/testimonial.dto";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Pricing } from "./pricing.interface";

@Injectable()
export class PricingService {
  constructor(
    @InjectModel("Pricing")
    private readonly pricingModel: Model<Pricing>
  ) {}

  async getPricing() {
    return await this.pricingModel.find();
  }

  async addPricing(pricing: PricingDto) {
    const newPricing = new this.pricingModel(pricing);
    return await newPricing.save();
  }

  async updatePricing(id: string, updatePricing: PricingDto) {
    const updtPricing = await this.pricingModel.findOne({ _id: id });
    Object.assign(updtPricing, updatePricing);
    return updtPricing.save();
  }

  async removePricing(id: string) {
    await this.pricingModel.findOneAndDelete({ _id: id });
    return "item deleted!";
  }
}
