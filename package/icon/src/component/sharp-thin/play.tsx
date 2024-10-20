
import { Icon } from "../../index";

/**
 * A component that renders the `play` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play?s=sharp-thin play}
 * @preview ![play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/play.svg)
 */
const Play: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 470.7L0 480l0-18.5 0-411L0 32l16 9.3L368.1 246.7 384 256l-15.9 9.3L16 470.7zM352.2 256L16 59.9l0 392.3L352.2 256z" />
    </Icon>
);

export default Play;