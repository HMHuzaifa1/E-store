import React from 'react';

function Footer() {
  return (
    <footer className="bg-fuchsia-950 text-white py-8">
      <div className="container mx-auto">
        <table className="w-full text-left text-white">
          <thead>
            <tr>
              <th className="pb-4">About</th>
              <th className="pb-4">Customer Service</th>
              <th className="pb-4">Follow Us</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">
              <a href="http://localhost:3000/">
              Company Info
                </a>
                 </td>
              <td className="py-2">
                <a href="http://localhost:3000/">
              FAQs
                </a>
                </td>
              <td className="py-2">
                <a
                  href="https://facebook.com"
                  className="text-white hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <a href="http://localhost:3000/">
              Careers
                </a>
                </td>
              <td className="py-2">
                <a href="http://localhost:3000/">
              Contact Us
                </a>
                </td>
              <td className="py-2">
                <a
                  href="https://twitter.com"
                  className="text-white hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <a href="http://localhost:3000/">
                Privacy Policy
                </a>
                </td>
              <td className="py-2"><a href="http://localhost:3000/">
              Returns
                </a></td>
              <td className="py-2">
                <a
                  href="https://instagram.com"
                  className="text-white hover:text-red-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
}

export default Footer;