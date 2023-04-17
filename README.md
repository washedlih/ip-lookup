![image](/public/iplookup.png)

## Introduction

[IP Address Lookup](https://ipsearch.vercel.app/) is a web app that allows you to search who a user is following based on keywords in their bio, username, and location.

## Usage

When you first visit the site, it will automatically fetch your current IP Address and display its location on the map. You can also enter an IP Address in the search bar to see specific information of that IP Address.

## Purpose

I wanted to use an IP lookup API to build a simple web app that displays specific information about an IP address. This would be useful for anyone who wants to see the location of a user based on their IP address.

## Lessons Learned

I learned how to work with the Google Maps API to display the location with a marker. One of the challenges I faced was figuring how to submit the form when the page first loads. I achieved this with a useEffect hook that runs a function to submit the form when the page first loads. This allowed me to fetch the user's current IP Address.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Vercel](https://vercel.com/)
