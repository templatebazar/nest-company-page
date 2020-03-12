import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PricingController } from "./controller/pricing/pricing.controller";
import { TestimonialController } from "./controller/testimonial/testimonial.controller";
import { PortfolioController } from "./controller/portfolio/portfolio.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { TestimonialModule } from "./controller/testimonial/testimonial.module";
import { PricingModule } from "./controller/pricing/pricing.module";
import { PortfolioModule } from "./controller/portfolio/portfolio.module";
@Module({
  imports: [
    TestimonialModule,
    MongooseModule.forRoot("mongodb://localhost/company_page"),
    PricingModule,
    PortfolioModule
  ],
  providers: []
})
export class AppModule {}
