import React from 'react'
import img from "../assets/logo1.png"
import { AiFillCode, AiFillCodepenCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={img}alt="" />
            <h2>Aditya Singh</h2>
            <p>A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away</p>
        </div>
        <aside>
      <h2>Social Media</h2>
      <article>
        <a target={'blank'}
        href="https://www.linkedin.com/in/aditya-s-b3a123131/"><AiFillLinkedin/></a>
        <a target={'blank'}
        href="https://github.com/Aditya407hue"><AiFillGithub/></a>
        <a target={'blank'}
        href="https://www.codingninjas.com/studio/profile/naruto_lord7th"><AiFillCodepenCircle/></a>
        <a target={'blank'}
        href="https://www.instagram.com/ig.aditya2002/"><AiFillInstagram/></a>
      </article>
        </aside>
        <a href="#home"> <AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer