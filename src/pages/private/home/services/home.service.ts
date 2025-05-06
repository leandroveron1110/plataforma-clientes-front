import { PrivateRoutesHttp } from "../../../../routes/routes";
import { AppServices } from "../../../../utilities/https.utility";

export interface UserTournamentSummary {
  userId: number;
  userName: string;
  totalDeposits: number;
  tournaments: {
    tournamentId: number;
    tournamentName: string;
    startDate: string; // o Date, si lo conviertes al recibir
    endDate: string;   // o Date
    userPoints: number;
    userRanking: number;
    totalParticipants: number;
  }[];
}


class HomeService {
  crud() {
    const app = new AppServices<null, number>(PrivateRoutesHttp.TOURNAMENTS);
    return app;
  }

}

export default new HomeService();
