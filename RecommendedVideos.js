import React from "react";
import  VideoCard from "./VideoCard";
import "./RecommendedVideos.css";
function RecommendedVideos(){
    return(
        <div className="recommendedVideos">
            <h2>
               Recommended
            </h2>
            <div className="recommendedVideos_videos">
                <VideoCard
                    title="Herouku Tutorial for Beginners"
                    views="144k views"
                    timestamp="2 years ago"
                    image="https://miro.medium.com/max/2400/1*FSkUtK8pYPBSNeaVotU4Ug.png"
                    channel="CodingSrc"
                />
                <VideoCard
                    title="Free Web Hosting Using Vercel"
                    views="1k views"
                    timestamp="7 months ago"
                    image="https://res.cloudinary.com/practicaldev/image/fetch/s--iCfL19ps--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/2jexnrpg7z7lzh3vormi.jpg"
                    channel="Tech Approved"
                />
                <VideoCard
                    title="How to Deploy a Serverless Node.js"
                    views="3.1k views"
                    timestamp="7 months ago"
                    channel="Coding Shiksha"
                    image="https://miro.medium.com/max/2400/1*FSkUtK8pYPBSNeaVotU4Ug.png"
                />
                <VideoCard
                    title="Java Full Coutse|Java Tutorial fro Beginners"
                    views="1.7 M views"
                    timestamp="1 year ago"
                    image="https://res.cloudinary.com/practicaldev/image/fetch/s--iCfL19ps--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/2jexnrpg7z7lzh3vormi.jpg"
                    channel="edureka"
                />
                <VideoCard
                    title="HTML Tutorial fro Beinners"
                    views="337k views"
                    timestamp="2 years ago"
                    image="https://miro.medium.com/max/2400/1*FSkUtK8pYPBSNeaVotU4Ug.png"
                    channel="edureka"
                />
                <VideoCard
                    title="CSS Tutorial fro Beginners"
                    views="104k views"
                    timestamp="2 years ago"
                    channel="edureka"
                    image="https://res.cloudinary.com/practicaldev/image/fetch/s--iCfL19ps--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/2jexnrpg7z7lzh3vormi.jpg"
                />
                

            </div>
        </div>
    )
    }
export default RecommendedVideos