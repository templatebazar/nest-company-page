import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param
} from "@nestjs/common";
import { TestimonialService } from "./testimonial.service";
import { TestimonialDto } from "../../dto/testimonial.dto";
import { Testimonial } from "./testimonial.interface";

@Controller("testimonial")
export class TestimonialController {
  constructor(private testimonialService: TestimonialService) {}
  @Get()
  async getTestimonials(): Promise<Testimonial[]> {
    return await this.testimonialService.getTestimonials();
  }

  @Post()
  async addTestimonial(
    @Body() createTestimonialDto: TestimonialDto
  ): Promise<Testimonial> {
    return await this.testimonialService.addTestimonial(createTestimonialDto);
  }

  @Put(":id")
  async updateTestimonial(
    @Param("id") id: string,
    @Body() updateTestimonialDto: TestimonialDto
  ) {
    return await this.testimonialService.updateTestimonial(
      id,
      updateTestimonialDto
    );
  }

  @Delete(":id")
  async removeTestimonial(@Param("id") id: string) {
    return this.testimonialService.removeTestimonial(id);
  }
}
