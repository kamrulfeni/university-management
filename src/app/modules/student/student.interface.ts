import { Model, Types } from 'mongoose';
import { IAcademicDepartment } from '../academicDepartment/academicDepartment.interfaces';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interfaces';
import { IAcademicSemester } from '../academicSemester/academicSemester.interface';

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  address: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type IStudent = {
  id: string;
  name: UserName; //embedded object
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian; // embedded object
  localGuardian: LocalGuardian; // embedded object
  academicFaculty: Types.ObjectId | IAcademicFaculty; // reference _id
  academicDepartment: Types.ObjectId | IAcademicDepartment; // reference _id
  academicSemester: Types.ObjectId | IAcademicSemester; // reference _id
  profileImage?: string;
};

export type StudentModel = Model<IStudent, Record<string, unknown>>;

export type IStudentFilters = {
  searchTerm?: string;
  id?: string;
  bloodGroup?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
};

// {
//   "password":"123456",

// "student":{
//     "name":{
//       "firstName": "Kamrul",
//       "middleName": "Hasan",
//       "lastName": "Mithu"
//     },
//     "dateOfBirth":"23-05-1999",
//     "gender":"male",
//     "email": "user@gmail.com",
//     "contactNo":"user_4",
//     "emergencyContactNo": "0161000000000",
//     "bloodGroup":"B+",
//     "presentAddress": "CTG",
//     "permanentAddress":"CTG",
//     "academicSemester":"64a3ea560e8fc6380aa2a229" ,
//     "academicDepartment":"64a6cbc319690ffb262b7a7e",
//     "academicFaculty":"64a6cb5019690ffb262b7a7c",
//     "guardian": {
//         "fatherName": "jalal Ahaammed",
//         "fatherOccupation": "Forener",
//         "fatherContactNo": "0181275577",
//         "motherName": "kKhinur",
//         "motherOccupation": "HouseWife",
//         "motherContactNo": "0182290767",
//         "address": "CTG"
//       },
//      "localGuardian": {
//         "name": "Jalal Ahammed",
//         "occupation": "Probashi",
//         "contactNo": "01838758757",
//         "address": "CTG"
//       }
//     }
//   }
