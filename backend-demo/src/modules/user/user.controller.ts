import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    public async createUser(@Body() user: User): Promise<User> {
        try {
            return await this.userService.createUser(user);
        } catch (error) {
            console.log("err", error.messeage);

        }
    }

    @Get()
    public async getAllUser(user: User): Promise<User[]> {
        try {
            return await this.userService.getAllUser();
        } catch (error) {
            console.log("err", error.messeage);

        }
    }
}
