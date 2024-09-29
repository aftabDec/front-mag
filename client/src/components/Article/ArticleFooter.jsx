import React from 'react'
import Button from '../button' // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-light-cream border-t-2 border-black footer text-base-content p-10">
      <div>
        <h5 className="font-montserrat font-bold text-lg">Darpan Literary Magazine</h5>
        <p className="font-forum text-sm">
          A magazine for youth, providing a platform to showcase their creative
          talent and ideas.
        </p>
      </div>

      <form>
        <h6 className="font-montserrat footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="font-forum label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn bg-custom-brown text-white join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  )
}

export default Footer
