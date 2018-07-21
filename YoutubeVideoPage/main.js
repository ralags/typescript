var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//base class
var Youtube = /** @class */ (function () {
    function Youtube() {
    }
    return Youtube;
}());
//derived class
var YoutubeVideoPage = /** @class */ (function (_super) {
    __extends(YoutubeVideoPage, _super);
    //constructor
    function YoutubeVideoPage(videoTitle, videoViews, videoLikes, videoDislikes, channelName, videoPublishDate, channelSubscribers, videoDuration, commenterName, commentTime, comment) {
        var _this = _super.call(this) || this;
        //functions
        _this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        _this.getVideoViews = function () {
            return _this.videoViews;
        };
        _this.getVideoLikes = function () {
            return _this.videoLikes;
        };
        _this.getVideoDislikes = function () {
            return _this.videoDislikes;
        };
        _this.getChannelName = function () {
            return _this.channelName;
        };
        _this.getVideoPublishDate = function () {
            return _this.videoPublishDate;
        };
        _this.getChannelSubscribers = function () {
            return _this.channelSubscribers;
        };
        _this.getVideoDuration = function () {
            return _this.videoDuration;
        };
        _this.getComment = function () {
            //for loop to display all comments by commenter,time and comments
            for (var num in _this.comment) {
                console.log("Comment " + (num));
                console.log("Name:" + _this.commenterName[num]);
                console.log("Time:" + _this.commentTime[num]);
                console.log("Comment:" + _this.comment[num]);
            }
        };
        _this.videoTitle = videoTitle;
        _this.videoViews = videoViews;
        _this.videoLikes = videoLikes;
        _this.videoDislikes = videoDislikes;
        _this.channelName = channelName;
        _this.videoPublishDate = videoPublishDate;
        _this.channelSubscribers = channelSubscribers;
        _this.videoDuration = videoDuration;
        _this.commenterName = commenterName;
        _this.commentTime = commentTime;
        _this.comment = comment;
        return _this;
    }
    YoutubeVideoPage.prototype.getNextVideo = function () {
        //logic of next video
    };
    return YoutubeVideoPage;
}(Youtube));
//creating object
var kolaveridi = new YoutubeVideoPage("Why This Kolaveri Di Official Video | Dhanush, Anirudh", 155437924, "976k", "57k", "Sony Music India", "Nov 16, 2011", "14M", "4.08 mins", ["jignesh", "sumit"], ["25 days ago", "30 days ago"], ["Awesome Song", "Nice music"]);
//calling functions with kolaveridi's object
console.log("Title:" + kolaveridi.getVideoTitle());
console.log("Views:" + kolaveridi.getVideoViews());
console.log("Likes:" + kolaveridi.getVideoLikes());
console.log("Dislikes:" + kolaveridi.getVideoDislikes());
console.log("Channel Name:" + kolaveridi.getChannelName());
console.log("Publish On:" + kolaveridi.getVideoPublishDate());
console.log("Subscribers:" + kolaveridi.getChannelSubscribers());
console.log("Duration:" + kolaveridi.getVideoDuration());
kolaveridi.getComment();
