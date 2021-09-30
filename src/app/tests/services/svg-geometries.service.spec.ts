import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SvgGeometriesService } from 'src/app/core/http/svg-geometries.service';
import { ISvgGeometry } from 'src/app/shared/models/commons/svg-geometry.interface';
import { TestsConstants } from 'src/app/tests/tests.constants.spec';

describe('SvgGeometriesService', () => {
  let service: SvgGeometriesService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SvgGeometriesService]
    });
    service = TestBed.inject<SvgGeometriesService>(SvgGeometriesService);
    http = TestBed.inject<HttpClient>(HttpClient);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable of geometries', () => {
    const response: Array<ISvgGeometry> = TestsConstants.responseAllGeometries;
    const expected$ = of(response);
    spyOn(http, 'get').and.returnValue(expected$);
    const result$ = service.getAllGeometries();
    expect(http.get).toHaveBeenCalled();
    result$.subscribe(val => {
      expect(val).toEqual(TestsConstants.responseAllGeometries);
    });
  });

  it('should return an Observable of a geometry given an id', () => {
    const response: ISvgGeometry = TestsConstants.geometryExample;
    const geometryId = 'shasfSection';
    const expected$ = of(response);
    spyOn(http, 'get').and.returnValue(expected$);
    const result$ = service.getGeometryById(geometryId);
    expect(http.get).toHaveBeenCalled();
    result$.subscribe(val => {
      expect(val).toEqual(response);
    });
  });

  it('should return an Observable of a geometry given certain category', () => {
    const response: ISvgGeometry = TestsConstants.geometryExample;
    const categoryId = 'shasfSection';
    const expected$ = of(response);
    spyOn(http, 'get').and.returnValue(expected$);
    const result$ = service.getGeometryByCategory(categoryId);
    expect(http.get).toHaveBeenCalled();
    result$.subscribe(val => {
      expect(val).toEqual(response);
    });
  });

  it('should return an Observable after save a geometry', () => {
    const newGeometry: ISvgGeometry = TestsConstants.geometryExample;
    const expected$ = of(undefined);
    spyOn(http, 'post').and.returnValue(expected$);
    const result$ = service.setGeometry(newGeometry);
    expect(http.post).toHaveBeenCalled();
    result$.subscribe(val => {
      expect(val).toBeUndefined();
    });
  });
});
