import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        'On Gautam Gambhir\'s India Head Coach Talks, Report Underlines Key "Shah Rukh Khan" Factor - NDTV Sports',
      description:
        "Gautam Gambhir is leading the race to become the next head coach of the senior men's cricket team.",
      url: "https://sports.ndtv.com/cricket/on-gautam-gambhirs-india-head-coach-talks-report-underlines-key-shah-rukh-khan-factor-5741126",
      urlToImage:
        "https://c.ndtvimg.com/2024-05/8j3a9838_gautam-gambhir-srk_625x300_25_May_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2024-05-25T07:52:47Z",
      content:
        "Former India batter Gautam Gambhir is leading the race to become the next head coach of the senior men's cricket team. With current head coach Rahul Dravid set to expire after the T20 World Cup next … [+1576 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Sports Desk",
      title:
        "'I couldn't believe it': IPL coach shocked by '48,000 MS Dhoni shirts' in CSK's away game - The Times of India",
      description:
        "Cricket News: Chennai Super Kings' MS Dhoni has been a key figure in the Indian Premier League 2024, with crowds overwhelmingly wearing his jerseys. Lucknow Super G",
      url: "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/i-couldnt-believe-it-ipl-coach-shocked-by-48000-ms-dhoni-shirts-in-csks-away-game/articleshow/110416638.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-110417426,width-1070,height-580,imgsize-129968,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-05-25T07:26:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        "Watch: MS Dhoni Takes Economy Class Flight From Bengaluru To Ranchi, Leaves Netizens Impressed - NDTV Sports",
      description:
        "Chennai Super Kings' IPL 2024 journey came to a heartbreaking end after they lost against Royal Challengers Bengaluru and got knocked out of the tournament.",
      url: "https://sports.ndtv.com/ipl-2024/ms-dhoni-takes-economy-class-flight-from-bengaluru-to-ranchi-leaves-netizens-impressed-watch-5741135",
      urlToImage:
        "https://c.ndtvimg.com/2024-05/q9mahv0o_ms-dhoni-_625x300_25_May_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2024-05-25T06:41:20Z",
      content:
        "Chennai Super Kings' IPL 2024 journey came to a heartbreaking end after they lost against Royal Challengers Bengaluru and got knocked out of the tournament. After the elimination of CSK, one question… [+2660 chars]",
    },
    {
      source: {
        id: null,
        name: "Crictracker.com",
      },
      author: "Rathnam Nayak",
      title:
        "USA vs BAN Match Prediction, 3rd T20I - Who will win today’s match between USA and BAN? - CricTracker",
      description:
        "Prairie View Cricket Complex, Houston, will see the United States of America (USA) hosting Bangladesh(BAN) for the third and final T20I of the T20I series on May 25, 2024.The historic venue, which hos",
      url: "https://www.crictracker.com/cricket-match-predictions/usa-vs-ban-match-prediction-3rd-t20i-who-will-win-todays-match-between-usa-and-ban/",
      urlToImage:
        "https://media.crictracker.com/media/attachments/1716543233096_USA-vs-BAN.jpeg",
      publishedAt: "2024-05-25T06:30:00Z",
      content:
        "Prairie View Cricket Complex, Houston, will see the United States of America (USA) hosting Bangladesh(BAN) for the third and final T20I of the T20I series on May 25, 2024.\r\nThe historic venue, which … [+3320 chars]",
    },
    {
      source: {
        id: null,
        name: "Odishatv.in",
      },
      author: "Rajendra Prasad Mohapatra",
      title:
        "IPL 2024: Sunil Gavaskar slams India’s pace hype, bats for ignored star - OTV News",
      description:
        "Former India great Sunil Gavaskar was effusive in his praise for Sandeep. The Little Master also blasted those who get impressed by express-pace in Indian cricket.",
      url: "https://odishatv.in/news/sports/ipl-2024-sunil-gavaskar-slams-india-s-pace-hype-bats-for-ignored-star-235794",
      urlToImage:
        "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/recent_photo_1713699815.jpg",
      publishedAt: "2024-05-25T06:26:25Z",
      content:
        "Indian fans and experts have a tendency to hype emerging pacers as the country seldom produces top class speedsters. However, many promising speedsters have soon gone into oblivion in the process whi… [+1485 chars]",
    },
    {
      source: {
        id: null,
        name: "Deccan Chronicle",
      },
      author: "DC Correspondent",
      title:
        "Hardik Pandya, Natasa Stankovic Getting Divorced? - Deccan Chronicle",
      description:
        "Hardik Pandya replaced Rohit Sharma as the captain of the Mumbai Indians in the Indian Premier League (IPL) 2024. Mumbai Indians are in the bottom of the points table and were the first team to be...",
      url: "https://www.deccanchronicle.com/sports/hardik-pandya-natasa-stankovic-getting-divorced-895643",
      urlToImage:
        "https://www.deccanchronicle.com/h-upload/2024/05/25/1092468-untitleddesign.webp",
      publishedAt: "2024-05-25T06:18:41Z",
      content:
        "Hardik Pandya replaced Rohit Sharma as the captain of the Mumbai Indians in the Indian Premier League (IPL) 2024. Mumbai Indians are in the bottom of the points table and were the first team to be el… [+864 chars]",
    },
  ];

  static defaultProps = {
    country: "in",
    pagesize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `NewsMonkey - ${this.capitalize(this.props.category)}`;
  }

  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
  };

  fetchMoreData = async ()=> {
    this.setState({page: this})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        {this.state.loading && <Spinner/>}
        <h1 className="text-center my-3">
          {this.capitalize(this.props.category)} Headlines....
        </h1>
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        > */}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title.slice(0, 20)}
                  description={
                    element.description ? element.description.slice(0, 60) : ""
                  }
                  url={element.url}
                  imageUrl={element.urlToImage}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        {/* </InfiniteScroll> */}
        <div className="container d-flex justify-content-evenly">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-outline-info"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              Math.ceil(this.state.totalResults / this.props.pagesize) <
              this.state.page + 1
            }
            type="button"
            className="btn btn-outline-info"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
