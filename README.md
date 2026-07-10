# Brawl Stars Widget

A Discord widget to show your Brawl Stars profile in your public Discord profile.

## Setup instructions

### Prerequisites

- Node LTS or higher
- A Brawl Stars Developers account (you can create one [here](https://developer.brawlstars.com/#/register))
- To create a Brawl Stars API token you'll need to specify the IP allowed to use it; if you don't have a static IP (e.g. a VPS) you'll need to create a new token every time you change IP and you'll be unable to enable automatic updates

### Create Widget

1. Copy the [setup.js](./setup.js) script
2. Open [Discord Developer Portal](https://discord.com/developers/applications) and make sure you're logged with the correct account: the widget can only be added to the account which created it
3. Open the DevTools (`Ctrl Shift I` or `F12`) and go to the **Console** tab
4. Paste the script and press _Enter_, completing 2FA if needed
5. If `Widget successfully added` is shown on the console, you can go ahead

### Fill the widget with your data

1. Get a [Brawl Stars API token](https://developer.brawlstars.com/#/account)
2. Clone the repo (on the machine where you want to run the script and use the API token): `git clone --depth 1 https://github.com/DTrombett/brawl-stars-widget.git`
3. `cd brawl-stars-widget`
4. `cp .example.vars .dev.vars`
5. Fill `.dev.vars` with the correct values:
   - `PLAYER_TAG` is your Brawl Stars player tag found below your profile picture in the player details window
   - `DISCORD_USER_ID` is your Discord user ID
   - `DISCORD_APPLICATION_ID` is the application ID found in the [**General Information**](https://discord.com/developers/applications/select/information) tab of the newly created **Brawl Stars Profile** application
   - `DISCORD_TOKEN` is found in the [**Bot**](https://discord.com/developers/applications/select/bot) tab by clicking **Reset Token**
   - `NODE_ENV` is not currently used and can be left as it is
   - `DOMAIN` is the domain to use for some images not available through the CDN. Unless you plan to self host it (you will need to serve `assets` statically through a domain), you can leave the default
   - `BRAWL_API_BASE` is the URL to the Brawl Stars API; unless you want to use a proxy, you can leave the default
   - `BRAWL_STARS_API_TOKEN` is the token you've previously created for the Brawl Stars API
6. Run `node .`
7. Reload your Discord client to see the updated data
8. Run `node .` again every time you want to update the data or setup a cron job to run it automatically

## Disclaimer

This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see [Supercell’s Fan Content Policy](https://supercell.com/en/fan-content-policy/).
