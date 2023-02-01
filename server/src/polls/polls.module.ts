import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { redisModule } from "src/modules.config";
import { PollsController } from "./polls.controller";
import { PollsService } from "./polls.service";

@Module({
    imports: [ConfigModule, redisModule], //Permite importas las variables del entorno en este modulo
    controllers: [PollsController],
    providers: [PollsService]
})
export class PollsModule{}