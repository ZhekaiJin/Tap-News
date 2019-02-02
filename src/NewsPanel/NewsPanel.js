import React from 'react';
// import _ from 'lodash';
// import PropTypes from 'prop-types';
// import Auth from '../Auth/Auth';
import './NewsPanel.css';
import NewsCard from '../NewsCard/NewsCard';


class NewsPanel extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         news : null,
    //         page_num: 0
    //     };
    // }

    constructor(){
      super();
      this.state = {news:null};
    }

    // scrollHandler() {
    //     const scroll_y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    //     if ((scroll_y + window.innerHeight) >= document.body.offsetHeight + 20) {
    //         // console.log(`${scroll_y} + ${window.innerHeight} = ${scroll_y + window.innerHeight} ? ${document.body.offsetHeight}`)
    //         console.log('scroll handler: ...')
    //         this.loadMoreNews();
    //     }
    // }

    // componentDidMount() {
    //     this.loadMoreNews();
    //     this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
    //     window.addEventListener('scroll', () => this.scrollHandler()); // closure neccessary here
    // }
    componentDidMount(){
      this.loadMoreNews();
    }

    loadMoreNews() {
      this.setState({
        news: [
          {
            'url':'http://www.google.com',
            'title':"test",
            'description':"test",
            'source':'cnn',
            'urlToImage':'https://www.google.com/search?tbm=isch&source=hp&biw=1513&bih=870&ei=iJGRW_aJAovysAWhg6C4DQ&q=k&oq=k&gs_l=img.3...1576.1576.0.1775.2.2.0.0.0.0.0.0..0.0....0...1ac.1.64.img..2.0.0.0...0.weJ8KPO2uto#imgrc=d9sP4Ch_9L2l-M:',
            'digest':"3RjuEomJo2601syZbU70HA==",
            'reason':"Recommend"
          }]
      });
    }
    // loadMoreNews() {
    //     if (!Auth.isAuthenticated()) {
    //         // TODO: redirect to login page
    //         this.context.router.history.replace('/login');
    //         return;
    //     }
    //
    //     const url = `${window.location.origin}/news/userId/${Auth.getEmail()}/pageNum/${this.state.page_num}`;
    //
    //     const request = new Request(encodeURI(url), {
    //         headers: { // otherwise the server would not understand
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + Auth.getToken()
    //         }
    //     });
    //     fetch(request)
    //         .then(res => {
    //             if (res.status === 200) {
    //                 return res.json();
    //             }
    //
    //             // TODO: not authenticated; redirect to login page?
    //             if (res.status === 401) {
    //                 Auth.deAuthenticate();
    //                 this.context.router.history.replace('/login');
    //                 throw Error('user not authenticated')
    //             }
    //             if (res.status === 500) {
    //                 // TODO: server might send back some error info, but not take it here
    //                 throw Error('Fetching news: server error!');
    //             }
    //             throw Error('Fetching news: other error!')
    //         })
    //         .then(new_list => {
    //             this.setState({
    //                 news: this.state.news == null ? new_list : this.state.news.concat(new_list),
    //                 page_num: this.state.page_num + 1
    //             }
    //         )})
    //         .catch((err => console.error(err))); // server error
    // }


    renderNews() {
        const news_list = this.state.news.map(news => {
            return (
                <a className='list-group-item' key={news.digest} href="#">
                    <NewsCard news={news} />
                </a>
            )
        })

        return (
            <div className="container-fluid">
                <div className='list-group'>
                    {news_list}
                </div>
            </div>
        )
    }

    render() {
        if (this.state.news) {
            return(
                <div>
                    {this.renderNews()}
                </div>
            )
        }
        return (
            <div> loading... </div>
        )
    }
}

// NewsPanel.contextTypes = {
//     router: PropTypes.object.isRequired
// }

export default NewsPanel;
