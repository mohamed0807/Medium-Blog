// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// import sanityClient from '@sanity/client'
// // import {previewClient} from '../../sanity'



// const config={
//     dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
//     projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     useCdn:process.env.NODE_ENV === "production",
//     token:process.env.SANITY_API_TOKEN,
// }
// const previewClient = sanityClient({
//   ...config,
//   useCdn:false,
//   token:process.env.SANITY_API_TOKEN,
// })

// const client=sanityClient(config)

// export default async function createComment(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const {_id,name,email,Comment}=JSON.parse(req.body);
//   console.log(_id,name,email,Comment)
//   try {
//     await client.create({
//     _type:"comment",
//     post:{
//         _type:"reference",
//         _ref:_id,
//     },
//     name,
//     email,
//     Comment
//     })
//   }catch(err){
//     // console.log("err")
//     return res.status(500).json({message:"Couldn't submit Comment",err})
//   }
//   return res.status(200).json({message:"Comment Submitted"})
//   // return res.status(418)
//   console.log("success")
// }
// console.log("hellon there ")

import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient  from "@sanity/client";


   const config = {
        dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        useCdn: process.env.NODE_ENV === "production",
        token: process.env.SANITY_API_TOKEN, 

    }

    const client = sanityClient(config);


export default async function createComment(
    req: NextApiRequest,
    res:NextApiResponse
)
{
    const {_id, name, email, Comment} = JSON.parse(req.body);
    try{
        await client.create({
            _type: 'comment',
            post:{
                _type: 'reference',
                _ref: _id
            },
            name,
            email,
            Comment

        })
    }
    catch(err){
        return  res.status(500).json({message:'could not submit comment', err})
    }
    console.log("comment submitted")
    return  res.status(200).json({message:'comment submitted'})

}