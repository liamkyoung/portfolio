import React from "react"
import DesktopWindowsTwoToneIcon from "@mui/icons-material/DesktopWindowsTwoTone"

function WebDevelopment() {
  return (
    <div className='skillWrapper'>
      <div className=''>
        <h1 className='font-notable m-3 text-2xl'>Development</h1>
      </div>
      <DesktopWindowsTwoToneIcon
        className='skillIcons'
        sx={{ fontSize: "4rem" }}
      />
      <div className='mb-10'>
        <h3 className='skillDesc'>
          I have been using React and other JavaScript frameworks for over 2
          years, and I always am eager to learn more. Creating in web is a lot
          of fun for me and I love to focus on the details.
        </h3>
      </div>
    </div>
  )
}

export default WebDevelopment
