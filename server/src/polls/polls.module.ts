import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [ConfigModule], //Permite importas las variables del entorno en este modulo
    controllers: [],
    providers: []
})
export class PollsModule{}