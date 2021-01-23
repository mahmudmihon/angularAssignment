import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const logins = [
      { id: 2020, email: 'mihonmahmud@gmail.com', password: 'hello', role: 'admin' },
      { id: 2233, email: 'mihonmahmud@yahoo.com', password: 'world', role: 'user' },
      { id: 2133, email: 'mihonmahmud@outlook.com', password: 'mihon', role: 'user' },
      { id: 2233, email: 'mihonmahmud@mail.com', password: 'mahmud', role: 'user' },
      { id: 2033, email: 'mahmuda@gmail.com', password: 'mahmuda', role: 'user' },
      { id: 2040, email: 'jinat@gmail.com', password: 'jinat', role: 'user' },
      { id: 2021, email: 'talat@gmail.com', password: 'talat', role: 'user' },
      { id: 2022, email: 'talat@yahoo.com', password: 'iram', role: 'user' },
      { id: 2023, email: 'khan@gmail.com', password: 'khan', role: 'user' },
      { id: 2024, email: 'khan@yahoo.com', password: 'password', role: 'user' }
    ];

    const userInfos = [
        { id: 2020, profilePicture: 'https://i.ibb.co/NtzrQvZ/matthew.png', fullName: 'Zahir Mahmud', dob: '1997-01-22', gender: 'Male', address: 'Dhaka, Bangladesh', phone: '01972308755' },
        { id: 2233, profilePicture: 'https://i.ibb.co/NtzrQvZ/matthew.png', fullName: 'Zahir Mahmud Rasel', dob: '1998-04-01', gender: 'Male', address: 'Dhaka, Bangladesh', phone: '01972308755' },
        { id: 2133, profilePicture: 'https://i.ibb.co/NtzrQvZ/matthew.png', fullName: 'Mahmud Rasel', dob: '1996-04-01', gender: 'Male', address: 'Dhaka, Bangladesh', phone: '01972308755' },
        { id: 2233, profilePicture: 'https://i.ibb.co/NtzrQvZ/matthew.png', fullName: 'Mahmud Mihon', dob: '1995-04-01', gender: 'Male', address: 'Dhaka, Bangladesh', phone: '01472308755' },
        { id: 2033, profilePicture: 'https://i.ibb.co/xfX8J8v/molly.png', fullName: 'Mahmuda Akter', dob: '1973-01-01', gender: 'Female', address: 'Dhaka, Bangladesh', phone: '01872308755' },
        { id: 2040, profilePicture: 'https://i.ibb.co/xfX8J8v/molly.png', fullName: 'Jinat Mahmud', dob: '2001-10-15', gender: 'Female', address: 'Dhaka, Bangladesh', phone: '01672308755' },
        { id: 2021, profilePicture: 'https://i.ibb.co/NtzrQvZ/matthew.png', fullName: 'Talat Iram', dob: '1998-04-01', gender: 'Male', address: 'Dhaka, Bangladesh', phone: '01372308755' },
        { id: 2022, profilePicture: 'https://i.ibb.co/NtzrQvZ/matthew.png', fullName: 'Iram Talat', dob: '1998-04-08', gender: 'Male', address: 'Dhaka, Bangladesh', phone: '01372308755' },
        { id: 2023, profilePicture: 'https://i.ibb.co/NtzrQvZ/matthew.png', fullName: 'Ashfaque Khan', dob: '1996-04-01', gender: 'Male', address: 'Dhaka, Bangladesh', phone: '01772308755' },
        { id: 2024, profilePicture: 'https://i.ibb.co/NtzrQvZ/matthew.png', fullName: 'Khan Saheb', dob: '1995-04-08', gender: 'Male', address: 'Dhaka, Bangladesh', phone: '01772308755' }
    ];

    return { logins, userInfos };
  }
}
