import { PortfolioService } from "./portfolio.service";
import { PortfolioDto } from "./../../dto/portfolio.dto";
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param
} from "@nestjs/common";

@Controller("portfolio")
export class PortfolioController {
  constructor(private portofolioService: PortfolioService) {}
  @Get()
  async getPortfolio() {
    return await this.portofolioService.getPortfolio();
  }

  @Post()
  async addPortfolio(@Body() createPortfolio: PortfolioDto) {
    return await this.portofolioService.addPortfolio(createPortfolio);
  }

  @Put(":id")
  async updatePortfolio(
    @Param("id") id: string,
    @Body() updatePortfolio: PortfolioDto
  ) {
    return await this.portofolioService.updatePortfolio(id, updatePortfolio);
  }

  @Delete(":id")
  async removePortfolio(@Param("id") id: string) {
    return await this.portofolioService.removePortfolio(id);
  }
}
