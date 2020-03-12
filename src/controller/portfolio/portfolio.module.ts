import { Module } from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";
import { MongooseModule } from "@nestjs/mongoose";
import { PortfolioController } from "./portfolio.controller";
import { PortfolioSchema } from "./portfolio.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Portfolio", schema: PortfolioSchema }])
  ],
  controllers: [PortfolioController],
  providers: [PortfolioService]
})
export class PortfolioModule {}
