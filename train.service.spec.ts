import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TrainService } from './train.service';
import { Train } from '../models/train';
import { RouterModule } from '@angular/router';

describe('TrainService', () => {
  let service: TrainService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TrainService]
    });

    service = TestBed.inject(TrainService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a train', () => {
    const dummyTrain: Train = {
      trainNumber: 1,
      trainName: 'Express',
      trainPrice: 500,
      trainSource: 'A',
      trainDest: 'B',
      runningDays: ['Monday', 'Wednesday'],
      trainStatus: 'RUNNING',
      route: { routeId: 108, routeName: 'A-B' }
    };

    service.createTrain(dummyTrain).subscribe(train => {
      expect(train).toEqual(dummyTrain);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/train/create');
    expect(req.request.method).toBe('POST');
    req.flush(dummyTrain);
  });

  it('should fetch all trains', () => {
    const dummyTrains: Train[] = [
      {
        trainNumber: 1,
        trainName: 'Express',
        trainPrice: 500,
        trainSource: 'A',
        trainDest: 'B',
        runningDays: ['Monday', 'Wednesday'],
        trainStatus: 'RUNNING',
        route: { routeId: 108, routeName: 'A-B' }
      },
      {
        trainNumber: 2,
        trainName: 'Superfast',
        trainPrice: 700,
        trainSource: 'B',
        trainDest: 'C',
        runningDays: ['Tuesday', 'Thursday'],
        trainStatus: 'DIVERTED',
        route: { routeId: 109, routeName: 'B-C' }
      }
    ];

    service.getAllTrains().subscribe(trains => {
      expect(trains.length).toBe(2);
      expect(trains).toEqual(dummyTrains);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/train/view');
    expect(req.request.method).toBe('GET');
    req.flush(dummyTrains);
  });

  it('should fetch train by number', () => {
    const dummyTrain: Train = {
      trainNumber: 1,
      trainName: 'Express',
      trainPrice: 500,
      trainSource: 'A',
      trainDest: 'B',
      runningDays: ['Monday', 'Wednesday'],
      trainStatus: 'RUNNING',
      route: { routeId: 108, routeName: 'A-B' }
    };

    service.getTrainById(1).subscribe(train => {
      expect(train).toEqual(dummyTrain);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/train/view/by/1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyTrain);
  });

  it('should update a train', () => {
    const updatedTrain: Train = {
      trainNumber: 1,
      trainName: 'Express Updated',
      trainPrice: 550,
      trainSource: 'A',
      trainDest: 'B',
      runningDays: ['Monday', 'Wednesday'],
      trainStatus: 'RUNNING',
      route: { routeId: 108, routeName: 'A-B' }
    };

    service.updateTrain(1, updatedTrain).subscribe(response => {
      expect(response).toBe('Train updated successfully');
    });

    const req = httpMock.expectOne('http://localhost:8080/api/train/edit/1');
    expect(req.request.method).toBe('PUT');
    req.flush('Train updated successfully');
  });

  it('should delete a train', () => {
    service.deleteTrain(1).subscribe(response => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne('http://localhost:8080/api/train/remove/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
