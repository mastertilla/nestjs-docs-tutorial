import { HttpException, HttpStatus, NotFoundException } from '@nestjs/common';

class PostNotFoundException extends NotFoundException {
    constructor(postId: number) {
        super(`Post with id ${postId} not found`)
    }
}