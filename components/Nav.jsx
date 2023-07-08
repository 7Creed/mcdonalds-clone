import React from 'react'

function Nav() {
  return (
    <div>
        <ul className="bg-blue-300 text-red-500  divide-y">
              <div>
                <li>Language</li>
                <li>Sign Up for Email</li>
                <li>Careers</li>
              </div>
              <div>
                <li>Our Menu</li>
                <li>Download App</li>
                <li>MyMcDonald's Rewards</li>
                <li>Exclusive Deals</li>
                <li>About Our Food</li>
                <li>Locate</li>
                <li>Gift Cards</li>
              </div>
              <div>
                <li>Search</li>
                <li>
                  <a href="#">Change your location</a>
                </li>
              </div>
            </ul>
    </div>
  )
}

export default Nav