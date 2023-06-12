import {  z } from 'zod';
import { academicSemesterCodes, academicSemesterMonths, academicSemesterTitles } from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]]),
  }),
  startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
    required_error: 'Start month is needed',
  }),
  endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
    required_error: 'End month is needed',
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};

// // req-validation
// body --> object
// data --->object
/**
 role: z.string({
      required_error: 'role is required',
    }),
    password: z.string().optional(),
 */
