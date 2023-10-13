import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

//Uploading Videos

export const uploadVideo=async (body)=>{
    //call post http request to http://localhost:4000/videos to add video in json server return reponse to Add Component
    return await commonAPI("POST",`${serverURL}/videos`,body)
}

//Get all videos
export const getAllVideo=async ()=>{
    //call get http request to http://localhost:4000/videos to get video from json server return reponse to View Component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}
//Get a single video
export const getAVideo=async (id)=>{
    //call get http request to http://localhost:4000/videos/id to get a video from json server return reponse to VideoCard Component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}
//Delete a single Video
export const deleteAVideo=async (id)=>{
    //call delete http request to http://localhost:4000/videos/id to delete a video from json server return reponse to VideoCard Component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}
//store video watching history to json server

export const addHistory=async (videoHistory)=>{
    //call post http request to http://localhost:4000/history to add video in json server return reponse to VideoCard Component
    return await commonAPI("POST",`${serverURL}/history`,videoHistory)
}


//get all video history from json server 
export const getHistory=async ()=>{
    //call get http request to http://localhost:4000/history to get all video history from json server return reponse to History Component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

//delete video watching history from json server
export const deleteHistory=async (id)=>{
    //call delete http request to http://localhost:4000/history to delete a video history from json server return reponse to History Component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}


//add category to json server
export const saveCategory=async (body)=>{
    //call post http request to http://localhost:4000/category to add category in json server return reponse to Category Component
    return await commonAPI("POST",`${serverURL}/categories`,body)
}
//get category from json server
export const getAllCategory=async ()=>{
    //call get http request to http://localhost:4000/category to get all video category from json server return reponse to Category  Component
    return await commonAPI("GET",`${serverURL}/categories`,"")
}




//delete category from json server
export const deleteCategory=async (id)=>{
    //call delete http request to http://localhost:4000/category/id to delete video category from json server return reponse to Category  Component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}

//update category from json server
export const updateCategory=async (id,body)=>{
    //call put http request to http://localhost:4000/category/id to update video category from json server return reponse to Category  Component
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
}