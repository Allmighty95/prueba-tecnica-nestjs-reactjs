import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiKeyGuard } from 'src/auth/api-key/api-key.guard';

@Controller('students')
@UseGuards(ApiKeyGuard)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('crear-alumno')
  create(@Body() createStudentDto: CreateStudentDto) {
    console.log('Datos recibidos del backend');
    return this.studentsService.create(createStudentDto);
  }

  @Get('consultar-alumnos')
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Get('consultar-alumno/:grade')
  findByGrade(@Param('grade') grade: number) {
    return this.studentsService.findByGrade(grade);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
