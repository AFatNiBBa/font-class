
import { Icon } from "../../index";

/**
 * A component that renders the `play` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play?s=sharp-regular play}
 * @preview ![play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/play.svg)
 */
const Play: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 32L0 87.6 0 424.4 0 480l48-28L336.4 283.8 384 256l-47.6-27.8L48 60 0 32zm48 83.6L288.7 256 48 396.4l0-280.9z" />
    </Icon>
);

export default Play;