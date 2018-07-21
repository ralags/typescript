//base class
class Youtube{
    //youtube's main class
}
//derived class
class YoutubeVideoPage extends Youtube{
    //properties
    videoTitle : String;
    videoViews : number;
    videoLikes : String;
    videoDislikes : String;
    channelName : String;
    videoPublishDate : String;
    channelSubscribers : String;
    videoDuration : String;
    commenterName : String[];
    commentTime : String[];
    comment : String[];
    //constructor
    constructor( videoTitle : String,videoViews : number,videoLikes : String,videoDislikes : String,
        channelName : String,videoPublishDate : String,channelSubscribers : String,videoDuration : String,
        commenterName : String[],commentTime : String[],comment : String[]){
        super();
        this.videoTitle = videoTitle;
        this.videoViews = videoViews;
        this.videoLikes = videoLikes;
        this.videoDislikes = videoDislikes;
        this.channelName = channelName;
        this.videoPublishDate = videoPublishDate;
        this.channelSubscribers = channelSubscribers;
        this.videoDuration = videoDuration;
        this.commenterName = commenterName;
        this.commentTime = commentTime;
        this.comment = comment;
    }
    //functions
    getVideoTitle = () =>{
        return this.videoTitle;
    }
    getVideoViews = () =>{
        return this.videoViews;
    }
    getVideoLikes = () =>{
        return this.videoLikes;
    }
    getVideoDislikes = () =>{
        return this.videoDislikes;
    }
    getChannelName = () =>{
        return this.channelName;
    }
    getVideoPublishDate = () =>{
        return this.videoPublishDate;
    }
    getChannelSubscribers = () =>{
        return this.channelSubscribers;
    }
    getVideoDuration = () =>{
        return this.videoDuration;
    }
    getComment = () =>{
        
        //for loop to display all comments by commenter,time and comments
        for(var num in this.comment){
            console.log("Comment "+(num));
            console.log("Name:"+this.commenterName[num]);
            console.log("Time:"+this.commentTime[num]);
            console.log("Comment:"+this.comment[num]);
        }
    }
    getNextVideo(){
        //logic of next video
    }
}
//creating object
let kolaveridi = new YoutubeVideoPage("Why This Kolaveri Di Official Video | Dhanush, Anirudh",155437924,"976k","57k",
"Sony Music India","Nov 16, 2011","14M","4.08 mins",["jignesh","sumit"],["25 days ago","30 days ago"],
["Awesome Song","Nice music"]);
//calling functions with kolaveridi's object
console.log("Title:"+kolaveridi.getVideoTitle());
console.log("Views:"+kolaveridi.getVideoViews());
console.log("Likes:"+kolaveridi.getVideoLikes());
console.log("Dislikes:"+kolaveridi.getVideoDislikes());
console.log("Channel Name:"+kolaveridi.getChannelName());
console.log("Publish On:"+kolaveridi.getVideoPublishDate());
console.log("Subscribers:"+kolaveridi.getChannelSubscribers());
console.log("Duration:"+kolaveridi.getVideoDuration());
kolaveridi.getComment();