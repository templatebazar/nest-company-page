import { PortfolioDto } from "./../../dto/portfolio.dto";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Portfolio } from "./portfolio.interface";

@Injectable()
export class PortfolioService {
  constructor(
    @InjectModel("Portfolio")
    private readonly portfolioModel: Model<Portfolio>
  ) {}

  async getPortfolio() {
    return await this.portfolioModel.find();
  }

  async addPortfolio(portfolio: PortfolioDto) {
    const newPortfolio = new this.portfolioModel(portfolio);
    return await newPortfolio.save();
  }

  async updatePortfolio(id: string, updatePortfolio: PortfolioDto) {
    const updtPricing = await this.portfolioModel.findOne({ _id: id });
    Object.assign(updtPricing, updatePortfolio);
    return updtPricing.save();
  }

  async removePortfolio(id: string) {
    await this.portfolioModel.findOneAndDelete({ _id: id });
    return "item deleted!";
  }
}
