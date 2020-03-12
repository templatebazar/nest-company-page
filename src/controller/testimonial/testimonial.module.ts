import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TestimonialController } from "./testimonial.controller";
import { TestimonialSchema } from "./testimonial.schema";
import { TestimonialService } from "./testimonial.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Testimonials", schema: TestimonialSchema }
    ])
  ],
  controllers: [TestimonialController],
  providers: [TestimonialService]
})
export class TestimonialModule {}
