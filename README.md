# WhatsApp Media Bot

A WhatsApp bot that searches TikTok videos and movies with phone number linking.

## Features

- 📱 Link with your phone number using pairing code
- 🎵 Search TikTok videos (`.tt <query>`)
- 🎬 Search movies (`.movie <query>`)
- 📋 Menu system (`.menu`)
- 🔢 Get pairing code (`.code`)

## Setup

1. **Deploy to Vercel**
   - Fork this repo
   - Go to [Vercel](https://vercel.com) and import your repo
   - Deploy

2. **Connect WhatsApp**
   - Check Vercel logs for QR code OR pairing code
   - Scan QR or use pairing code to link your number

## Commands

- `.menu` - Show all commands
- `.tt <query>` - Search TikTok videos  
- `.movie <query>` - Search movies
- `.code` - Get pairing code
- `.ping` - Check bot status

## Pairing Code

When you deploy, you'll get a pairing code like `DOGMENHB`. Use this to link your phone number without QR scanning.

## Note

This uses mock data for TikTok/movie searches. Replace with actual APIs:
- OMDB API for movies (free)
- TikTok unofficial APIs (may require payment)
