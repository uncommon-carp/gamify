# Gamify Tasks and Habits

Project name in progress

## Proposed Stack

User Interface: React Native, Apollo GraphQL Client
Server: Node, TS, Apollo GraphQL Server, Serverless?, Express?

## About

I have pretty severe ADHD. One of the best things for getting myself organized and motivated is gamifying what I'm doing, ie: predicatable rewards, progress tracking etc. LifeRPG was a great app that did exactly that with tasks and habits, but has since fallen out of support and development. I aim to bring that idea back to life with some QoL improvements and more focus on habit tracking/adjustment. Even if you don't have ADHD, gamifying your day-to-day can be a great way to increase motivation, increase feelings of satisfaction, or to work on building new habits while breaking old ones. I will be looking to Dungeons and Dragons, World of Warcraft, Final Fantasy and a few other RPGs for inspiration and fundamentals.

## User Story : MVP

I want to turn my tasks and habit tracking into a game that gives experience, rewards, levels, and skill points.

I need to build my own daily, weekly, and long term "Quests". - Each quest should have a difficulty, reward, acceptance criteria - Quest rewards will always contain experience proportionate to the difficulty, and may contain currency

I need skills and a character level to progress as I complete Quests - Each quest, dependent on difficulty, will provide a skill bump for associated skills - Character level will increase as certain thresholds of experience are gained - Level cap? 100 is a nice, round number

I need a currency to earn and trade - "Gems" are purchasable items that represent real-world rewards - "Equipment" are purchasable items that enhance the player's character

## Player Stats

    - Constitution
    - Strength
    - Wisdom
    - Intellect
    - Dexterity
    - Charisma

## Models

    1. User
    2. Sheet
    3. Stat
    4. Quest
    5. Task
    6. Reward

![ERD](https://i.imgur.com/WcH7M2S.jpg)
