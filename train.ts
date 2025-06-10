export interface Route {
    routeId: number;
    routeName: string;
  }
  
  export interface Train {
    trainNumber: number;
    trainName: string;
    trainPrice: number;
    trainSource: string;
    trainDest: string;
    runningDays: string[];
    trainStatus: 'RUNNING' | 'DIVERTED' | 'CANCELLED';
    route: Route;
  }