import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../classes/company';
import { Observable } from 'rxjs';
import { JobSeeker } from '../classes/jobseeker';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}


@Injectable({
  providedIn: 'root'
})
export class RestService {

  companies: Company[];
  jobseekers: JobSeeker[];

  constructor(private http: HttpClient) { }

  jobseekersUrl: string = "http://localhost:3000/jobseekers/"
  companiesUrl: string = "http://localhost:3000/companies/"

  // Get
  getJobSeekers(): Observable<JobSeeker[]> {
    return this.http.get<JobSeeker[]>(this.jobseekersUrl, httpOptions);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl, httpOptions);
  }
  // Get By Id
  getCompanyById(id): Observable<Company> {
    return this.http.get<Company>(`${this.companiesUrl}/${id}`, httpOptions);
  }

  getJobseekerById(id): Observable<JobSeeker> {
    return this.http.get<JobSeeker>(`${this.jobseekersUrl}/${id}`, httpOptions);
  }
  // Delete By Id
  deleteCompanyById(id): Observable<Company[]> {
    return this.http.delete<Company[]>(`${this.companiesUrl}/${id}`, httpOptions)

  }

  deleteJobseekerById(id): Observable<JobSeeker[]> {
    return this.http.delete<JobSeeker[]>(`${this.jobseekersUrl}/${id}`, httpOptions)
  }

  //Put
  updateJobSeekerNameById(data): Observable<JobSeeker> {
    var x =  this.http.put<JobSeeker>(`${this.jobseekersUrl}/${data.id}`, JSON.stringify(data), httpOptions);
    var s = x.subscribe(res => console.log(res));
    return x;
  }

  // Post 
   addJobSeeker(data): Observable<JobSeeker> {
     return this.http.post<JobSeeker>(this.jobseekersUrl, JSON.stringify(data), httpOptions);
   }
}
