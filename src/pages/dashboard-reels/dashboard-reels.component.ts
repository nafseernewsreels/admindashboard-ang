import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/services/API/api.service';

export interface StatusScraped {
  status: String,
  all: number,
  youtube: number,
  instagram: number,
  ytvideos: number,
  ytshorts: number,
  igvideos: number,
  igreels: number,
}



export interface QueuedDetails {
  status: String
  all: number
}

const ELEMENT_DATA: StatusScraped[] = [
  {status: 'QueuedExtract', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'QueuedTranscript', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'QueuedSummary', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'QueuedParaphrase', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'QueuedAutomate', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'QueuedMake', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'QueuedCaption', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'QueuedRender', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'QueuedCompress', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'QueuedUpload', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'QueuedPost', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'Extracting', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'Transcripting', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'Summarizing', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'Paraphrasing', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'Automating', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'Making', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'Captioning', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'Rendering', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'Compressing', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'Uploading', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'Posting', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'FailedExtract', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'FailedTranscript', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'FailedSummary', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'FailedParaphrase', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'FailedAutomate', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'FailedMake', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'FailedCaption', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'FailedRender', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'FailedCompress', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'FailedUpload', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'FailedPost', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'Posted', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
  {status: 'Skipping', all:1200, youtube: 850, instagram: 340, ytvideos: 230, ytshorts: 400, igvideos:400, igreels:900},
];

const ELEMENT_NEW_DATA: QueuedDetails[] = [
  {status: 'QueuedExtract', all: 1200},
  {status: 'QueuedTranscript', all: 1200},
  {status: 'QueuedSummary', all: 1200},
  {status: 'QueuedParaphrase', all: 1200},
  {status: 'QueuedAutomate', all: 1200},
  {status: 'QueuedMake', all: 1200},
  {status: 'QueuedCaption', all: 1200},
  {status: 'QueuedRender', all: 1200},
  {status: 'QueuedCompress', all: 1200},
  {status: 'QueuedUpload', all: 1200},
  {status: 'QueuedPost', all: 1200},
];

@Component({
  selector: 'app-dashboard-reels',
  templateUrl: './dashboard-reels.component.html',
  styleUrls: ['./dashboard-reels.component.css']
})


export class DashboardReelsComponent implements OnInit {
  li: any;
  scraped = [];
  // scraped = Scraped[];
  displayedColumns: string[] = ['status','all', 'youtube', 'instagram', 'ytvideos', 'ytshorts', 'igvideos', 'igreels'];
  dataSource = ELEMENT_DATA;
  newDisplayedColumns : string[] = ['status', 'all']
  newDataSource = ELEMENT_NEW_DATA
  constructor(private http: HttpClient, private apiService : APIService) { 

  }

  ngOnInit(): void { 
    this.apiService.getYoutubeScraperNumber().subscribe((res) => {
      // console.log(res)
      // JSON.stringify(res)
    })
  }

  

  
    
  }
