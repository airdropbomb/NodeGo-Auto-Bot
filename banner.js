import chalk from 'chalk';

export default function displayBanner() {
    console.log(chalk.cyan(`
    _    ____  ____    _   _  ___  ____  _____ 
   / \  |  _ \| __ )  | \ | |/ _ \|  _ \| ____|
  / _ \ | | | |  _ \  |  \| | | | | | | |  _|  
 / ___ \| |_| | |_) | | |\  | |_| | |_| | |___ 
/_/   \_\____/|____/  |_| \_|\___/|____/|_____|

                ${chalk.yellow('NODEGO AUTO - BOT')}                
    📢  ${chalk.yellow('Telegram Channel: https://t.me/airdropbombnode')}`));

    console.log(chalk.yellow('\n════════════════════════════════════════════════════════'));
    console.log(chalk.white(`Started at: ${new Date().toLocaleString()}`));
    console.log(chalk.yellow('════════════════════════════════════════════════════════\n'));
}
