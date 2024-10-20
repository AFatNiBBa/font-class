
import { Icon } from "../../index";

/**
 * A component that renders the `play` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play?s=sharp-light play}
 * @preview ![play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/play.svg)
 */
const Play: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 461.3L0 480l0-37L0 69 0 32 32 50.7 352.2 237.5 384 256l-31.8 18.5L32 461.3zM320.5 256L32 87.7l0 336.6L320.5 256z" />
    </Icon>
);

export default Play;