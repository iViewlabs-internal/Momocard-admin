import React from 'react'

const Footer = () => {
  const d = new Date();
  const year=d.getFullYear();
  return (
    <div className="Footer">
                    Copyright &copy; {year} Company Name.All Rights Reserved
                </div>
  )
}

export default Footer
