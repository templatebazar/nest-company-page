import { PricingService } from "./pricing.service";
import { PricingDto } from "./../../dto/pricing.dto";
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param
} from "@nestjs/common";

@Controller("pricing")
export class PricingController {
  constructor(private pricingService: PricingService) {}

  @Get()
  async getPricing() {
    return await this.pricingService.getPricing();
  }

  @Post()
  async addPricing(@Body() createPricing: PricingDto) {
    return await this.pricingService.addPricing(createPricing);
  }

  @Put(":id")
  async updatePricing(
    @Param("id") id: string,
    @Body() updatePricing: PricingDto
  ) {
    return await this.pricingService.updatePricing(id, updatePricing);
  }

  @Delete(":id")
  async removePricing(@Param("id") id: string) {
    return await this.pricingService.removePricing(id);
  }
}
