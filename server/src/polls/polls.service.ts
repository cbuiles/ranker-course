import { Injectable } from "@nestjs/common";
import { createPollID, createUserID } from "src/utils/ids";
import { CreatePollField, JoinPollFields, RejoinPollFields } from "./types";

@Injectable()
export class PollsService {
    async createPoll(fields: CreatePollField){
        const pollID = createPollID();
        const userID = createUserID();

        return {
            ...fields,
            pollID,
            userID
        };
    }

    async joinPoll(fields: JoinPollFields){
        const userID = createUserID();
        return {
            ...fields,
            userID
        };
    }

    async rejoinPoll(fields: RejoinPollFields){
        return fields;
    }

}
