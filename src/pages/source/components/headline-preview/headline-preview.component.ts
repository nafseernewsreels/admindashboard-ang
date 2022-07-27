import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { APIService } from 'src/services/API/api.service';

@Component({
  selector: 'app-headline-preview',
  templateUrl: './headline-preview.component.html',
  styleUrls: ['./headline-preview.component.css']
})
export class HeadlinePreviewComponent implements OnInit {
  @Input() sourceID: string = '';
  @Input() templatesNames= ([] as any[]);
  dataLinks = [];
  selectedTemplateNames = [];
templateArray = ([] as any[]);
isTemplateLoading = false;
urlTemplate = '';
isLoading = false;
displayedColumns: string[] = ['article_link', 'text', 'belongs' ];
selectedRow: {article_link: string, text: string, belongs: string} = {
  article_link: '',
  text: '',
  belongs: ''

};
dataSource = new MatTableDataSource<any>([]);

@ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
  }

  getRecord(row:any){
    this.selectedRow = row;
    }
preview(){
  this.isLoading = true;
  let selectedTemplateNames = {source_id: this.sourceID,template:'', url: '' }
    let test = this.templatesNames.map((tempName: any) => {
      if(tempName.isChecked){
        return tempName?.value
      }
    })
    selectedTemplateNames.template = test.filter((e) => e).join(',')
      selectedTemplateNames.url = this.urlTemplate;
      
      // this.dataSource.data = [
      //   {
      //     "article_link": "http://edition.cnn.com/world",
      //     "text": "World",
      //     "belongs": true
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/africa",
      //     "text": "Africa",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/americas",
      //     "text": "Americas",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/asia",
      //     "text": "Asia",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/australia",
      //     "text": "Australia",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/china",
      //     "text": "China",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/europe",
      //     "text": "Europe",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/india",
      //     "text": "India",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/middle-east",
      //     "text": "Middle East",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/uk",
      //     "text": "United Kingdom",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/audio",
      //     "text": "Audio",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/us.cnn.com?hpt=header_edition-picker",
      //     "text": "US",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com?hpt=header_edition-picker",
      //     "text": "International",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/arabic.cnn.com?hpt=header_edition-picker",
      //     "text": "Arabic",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/cnnespanol.cnn.com?hpt=header_edition-picker",
      //     "text": "Español",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/politics",
      //     "text": "US Politics",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/politics/joe-biden-news",
      //     "text": "The Biden Presidency",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/politics/fact-check-politics",
      //     "text": "Facts First",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/election/2022",
      //     "text": "US Elections",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/business",
      //     "text": "Business",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/markets",
      //     "text": "Markets",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/business/tech",
      //     "text": "Tech",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/business/media",
      //     "text": "Media",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/business/success",
      //     "text": "Success",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/business/perspectives",
      //     "text": "Perspectives",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/business/videos",
      //     "text": "Videos",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/health",
      //     "text": "Health",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/health/life-but-better",
      //     "text": "Life, But Better",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/health/fitness-life-but-better",
      //     "text": "Fitness",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/health/food-life-but-better",
      //     "text": "Food",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/health/sleep-life-but-better",
      //     "text": "Sleep",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/health/mindfulness-life-but-better",
      //     "text": "Mindfulness",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/health/relationships-life-but-better",
      //     "text": "Relationships",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/entertainment",
      //     "text": "Entertainment",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/entertainment/celebrities",
      //     "text": "Stars",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/entertainment/movies",
      //     "text": "Screen",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/entertainment/tv-shows",
      //     "text": "Binge",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/entertainment/culture",
      //     "text": "Culture",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/tech/innovate",
      //     "text": "Innovate",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/tech/gadget",
      //     "text": "Gadget",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/tech/foreseeable-future",
      //     "text": "Foreseeable Future",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/tech/mission-ahead",
      //     "text": "Mission: Ahead",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/tech/upstarts",
      //     "text": "Upstarts",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/tech/work-transformed",
      //     "text": "Work Transformed",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/tech/innovative-cities",
      //     "text": "Innovative Cities",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/style",
      //     "text": "Style",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/style/arts",
      //     "text": "Arts",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/style/design",
      //     "text": "Design",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/style/fashion",
      //     "text": "Fashion",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/style/architecture",
      //     "text": "Architecture",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/style/luxury",
      //     "text": "Luxury",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/style/beauty",
      //     "text": "Beauty",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/style/videos",
      //     "text": "Video",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/travel",
      //     "text": "Travel",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/travel/destinations",
      //     "text": "Destinations",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/travel/food-and-drink",
      //     "text": "Food and Drink",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/travel/stay",
      //     "text": "Stay",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/travel/news",
      //     "text": "News",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/travel/videos",
      //     "text": "Videos",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/sport",
      //     "text": "Sports",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/sport/football",
      //     "text": "Football",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/sport/tennis",
      //     "text": "Tennis",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/sport/golf",
      //     "text": "Golf",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/sport/beijing-winter-olympics-2022",
      //     "text": "Olympics",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/sport/us-sports",
      //     "text": "US Sports",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/climbing",
      //     "text": "Climbing",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/sport/motorsport",
      //     "text": "Motorsport",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/esports",
      //     "text": "Esports",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/videos",
      //     "text": "Videos",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/live-tv",
      //     "text": "Live TV",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/digital-studios",
      //     "text": "Digital Studios",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/videos/digital-shorts",
      //     "text": "CNN Films",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/videos/hln",
      //     "text": "HLN",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/tv/schedule/cnn",
      //     "text": "TV Schedule",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/tv/all-shows",
      //     "text": "TV Shows A-Z",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/vr",
      //     "text": "CNNVR",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials",
      //     "text": "Features",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/interactive/asequals",
      //     "text": "As Equals",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/interactive/call-to-earth",
      //     "text": "Call to Earth",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/world/freedom-project",
      //     "text": "Freedom Project",
      //     "belongs": true
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/impact-your-world",
      //     "text": "Impact Your World",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/africa/inside-africa",
      //     "text": "Inside Africa",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/opinions/two-degrees",
      //     "text": "2 Degrees",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/cnn-heroes",
      //     "text": "CNN Heroes",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/weather",
      //     "text": "Weather",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/world/cnn-climate",
      //     "text": "Climate",
      //     "belongs": true
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/interactive/2020/weather/gonzalo-storm-path-tracker/index.html",
      //     "text": "Storm Tracker",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/interactive/2020/weather/wildfire-and-air-quality-tracker",
      //     "text": "Wildfire Tracker",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/weather/weather-video",
      //     "text": "Video",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/more",
      //     "text": "More",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/photos",
      //     "text": "Photos",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/cnn-longform",
      //     "text": "Longform",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/cnn-investigates",
      //     "text": "Investigations",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/profiles",
      //     "text": "CNN Profiles",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/more/cnn-leadership",
      //     "text": "CNN Leadership",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/email/subscription",
      //     "text": "CNN Newsletters",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/turnerjobs.com/search-jobs?orgIds=1174&ac=19299",
      //     "text": "Work for CNN",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/specials/world/traders",
      //     "text": "Traders",
      //     "belongs": true
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/2021/07/14/world/tusimple-autonomous-truck-spc-intl/index.html",
      //     "text": "Self-driving truck makes delivery 10 hours faster than a human",
      //     "belongs": true
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/2021/05/12/world/ironhand-exoskeleton-glove-spc-intl/index.html",
      //     "text": "A robotic 'Ironhand' could protect factory workers from injuries",
      //     "belongs": true
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/2021/06/15/asia/swarm-robots-hong-kong-warehouse-hnk-spc-intl/index.html",
      //     "text": "This swarm of robots gets smarter the more it works",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "https://edition.cnn.com/specials/middleeast/dubai-now",
      //     "text": "Dubai Now",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/travel/article/dubai-heart-of-europe-nears-completion/index.html",
      //     "text": "The man-made islands emerging from the sea",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/style/article/mars-science-city-design-spc-scn/index.html",
      //     "text": "This Martian city is being built in the desert outside Dubai",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/style/article/azra-khamissa-modern-henna-hnk-spc-intl/index.html",
      //     "text": "The ancient art of henna gets a modern makeover",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/style/article/naomi-campbell-ian-audifferen-nigeria-arise-fashion-hnk-spc-intl/index.html",
      //     "text": "How Naomi Campbell surprised this Nigerian designer on the runway",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/style/article/xopher-wallace-anonymous-artist-south-africa-spc-intl/index.html",
      //     "text": "South African artist blurs dreams and reality",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/travel/gallery/steve-benjamin-underwater-photography-cape-town-spc-intl/index.html",
      //     "text": "Sharks and seals, photographed up close",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/bleacherreport.com/?utm_source=cnn.com&utm_medium=referral&utm_campaign=editorial",
      //     "text": "US sports",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/bleacherreport.com/articles/10043419-d-backs-druw-jones-son-of-andruw-out-for-year-after-suffering-shoulder-injury?utm_source=cnn.com&utm_medium=referral&utm_campaign=editorial",
      //     "text": "MLB's No. 2 draft pick will miss season",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/bleacherreport.com/articles/10043353-nfl-training-camp-latest-buzz-julio-jones-could-be-huge-boost-for-tom-brady-bucs?utm_source=cnn.com&utm_medium=referral&utm_campaign=editorial",
      //     "text": "Latest buzz from NFL training camp",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/bleacherreport.com/articles/10043360-cowboys-jerry-jones-uses-offensive-term-for-little-people-at-nfl-training-camp?utm_source=cnn.com&utm_medium=referral&utm_campaign=editorial",
      //     "text": "Jerry Jones uses offensive term for little people",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/bleacherreport.com/articles/10043297-wnba-rumors-liz-cambage-quit-the-sparks-wants-out-of-la?utm_source=cnn.com&utm_medium=referral&utm_campaign=editorial",
      //     "text": "WNBA star abruptly cuts ties with team",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/bleacherreport.com/articles/10043284-sources-offer-crucial-context-to-boston-celtics-trade-proposal-for-kevin-durant?utm_source=cnn.com&utm_medium=referral&utm_campaign=editorial",
      //     "text": "Are the Celtics legit suitors for Durant?",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/bleacherreport.com/articles/10043291-brittney-griners-lawyers-argue-she-used-cannabis-legally-to-manage-injuries-in-usa?utm_source=cnn.com&utm_medium=referral&utm_campaign=editorial",
      //     "text": "Griner's lawyers testify cannabis was medicinal",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/fool.com/the-ascent/credit-cards/landing/wells-fargo-reflect-review/?utm_site=theascent&utm_campaign=ta-cc-co-cnn-welref2-ron-5-hp-sfpb&utm_medium=cpc&utm_source=cnn",
      //     "text": "The Ascent",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/fool.com/the-ascent/credit-cards/landing/citi-simplicity-review/?utm_site=theascent&utm_campaign=ta-cc-co-cnn-citisimp2-ron-5-hp-sfpb&utm_medium=cpc&utm_source=cnn",
      //     "text": "It's official: now avoid credit card interest into 2024",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/fool.com/the-ascent/credit-cards/landing/wells-fargo-active-cash-card-review/?utm_site=theascent&utm_campaign=ta-cc-co-cnn-welac2-ron-5-hp-sfpb&utm_medium=cpc&utm_source=cnn",
      //     "text": "Experts: this is the best cash back card of 2022",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/lendingtree.com/?splitterid=content-mortgage&loan-type=refinance&esourceid=6348766&cproduct=refi&csource=cnn&cchannel=content&mtaid=F1495&cmethod=refiform&ccreative=lockinbeforetoohigh_lakefallhome&placement_name=sectionfront&ad_headline=lockinbeforetoohigh&ad_image_name=lakefallhome&ctype=sectionfront&rcode=10000",
      //     "text": "LendingTree",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/lendingtree.com/info/5-reasons-to-refinance-before-the-fed-meets/?esourceid=6457716&cproduct=refi&csource=cnn&cchannel=content&mtaid=F1495&cmethod=fedcountdown&ccreative=ratesrisefedlocknow_lakefallhome&placement_name=sectionfront&ad_headline=ratesrisefedlocknow&ad_image_name=lakefallhome&ctype=sectionfront&rcode=10000",
      //     "text": "Rates Could Rise After the Fed Meets. Lock in Now.",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/lendingtree.com/?splitterid=content-mortgage&loan-type=refinance&esourceid=6348766&cproduct=refi&csource=cnn&cchannel=content&mtaid=F1495&cmethod=refiform&ccreative=canyou0pocket_lakefallhome&placement_name=sectionfront&ad_headline=canyou0pocket&ad_image_name=lakefallhome&ctype=sectionfront&rcode=10000",
      //     "text": "Can You Refinance With $0 Out Of Pocket?",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/terms",
      //     "text": "Terms of Use",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/privacy",
      //     "text": "Privacy Policy",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/accessibility",
      //     "text": "Accessibility & CC",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/warnermediaprivacy.com/opt-out",
      //     "text": "Ad Choices",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/about",
      //     "text": "About Us",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/msa",
      //     "text": "Modern Slavery Act Statement",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/commercial.cnn.com",
      //     "text": "Advertise with us",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/store.cnn.com",
      //     "text": "CNN Store",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/newsletters",
      //     "text": "Newsletters",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/transcripts",
      //     "text": "Transcripts",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/collection",
      //     "text": "License Footage",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/cnnnewsource.com",
      //     "text": "CNN Newsource",
      //     "belongs": false
      //   },
      //   {
      //     "article_link": "http://edition.cnn.com/cnn.com/sitemap.html",
      //     "text": "Sitemap",
      //     "belongs": false
      //   }
      // ]

      this.apiService.getSourceHeadlinePreview(selectedTemplateNames).subscribe((res) => {
        console.log("response", res)
        
        this.dataSource.data = res?.links;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      })
}
}
