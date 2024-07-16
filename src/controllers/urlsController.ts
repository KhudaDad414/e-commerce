import { NextFunction, Request, Response } from 'express';
import { addURl, getURLByShorthand } from '../services';
import crypto from 'crypto'


type Controller = (req: Request, Response: Response, next: NextFunction) => void



export const getUrls: Controller = async (req,res,next) => {
  //Skip validation
  const shortHand = req.params.shortHand
  const url = await getURLByShorthand(shortHand)

  if(!url) {
    return res.status(400).json({message: "Invalid Shorthand."})
  }

  res.redirect(url.url)
}


export const postUrls: Controller = async (req, res, next) => {
  // {url: string}
  try {
  const urlString: string = req.body.url
  const shortHand: string = crypto.randomBytes(16).toString("base64")
  const createdUrl = await addURl({url: urlString, shortHand})
  res.status(201).json(createdUrl)

} catch(e) {
  res.status(500).json({message: "Something went wrong while creating shorthand, please try again."})
}
  
}
