
import { Icon } from "../../index";

/**
 * A component that renders the `play` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play?s=regular play}
 * @preview ![play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/play.svg)
 */
const Play: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 432L336 256 48 80l0 352zM24.5 38.1C39.7 29.6 58.2 30 73 39L361 215c14.3 8.7 23 24.2 23 41s-8.7 32.2-23 41L73 473c-14.8 9.1-33.4 9.4-48.5 .9S0 449.4 0 432L0 80C0 62.6 9.4 46.6 24.5 38.1z" />
    </Icon>
);

export default Play;