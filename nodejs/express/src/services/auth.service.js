import * as userRepository from '../repositories/user.repository.js'
import bcrypt from 'bcrypt';

export const register = async (userData) => {
    const existingUser = await userRepository.getUserByEmail(
        userData.email
    );

    if(existingUser){
        throw new Error('User already existis');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10)

    return await userRepository.createUser(
        {
            ...userData,
            password:hashedPassword
        }
    )
}