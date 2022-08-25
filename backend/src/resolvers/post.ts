import { Query, Resolver } from "type-graphql";



//import {data} from "../../index"
import UnionTypes from "../typesDefs/UnionTypes";
import axios from "axios"

async function apiCall() {
    const url: string = "http://localhost:6660/i/all/";
    const res = await axios.get(url);
    console.log(res.status);
    return res.data;
  }
  
const data = apiCall()

@Resolver()
export default class postResolvers {
    @Query(() => [UnionTypes])
    publication(){
        console.log(data)
        return data
    }
}