import { Module } from "@nestjs/common";
import { PricingService } from "./pricing.service";
import { MongooseModule } from "@nestjs/mongoose";
import { PricingController } from "./pricing.controller";
import { PricingSchema } from "./pricing.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Pricing", schema: PricingSchema }])
  ],
  controllers: [PricingController],
  providers: [PricingService]
})
export class PricingModule {}
