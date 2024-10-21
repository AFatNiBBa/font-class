
import { Icon } from "../../index";

/**
 * A component that renders the `mars-stroke` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke?s=sharp-regular mars-stroke}
 * @preview ![mars-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mars-stroke.svg)
 */
const MarsStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 0l24 0L488 0l24 0 0 24 0 112 0 24-48 0 0-24 0-54.1L409.9 136l31 31 17 17L424 217.9l-17-17-31-31-27.7 27.7C370.7 227.2 384 264.1 384 304c0 97.2-78.8 176-176 176s-176-78.8-176-176s78.8-176 176-176c39.9 0 76.8 13.3 106.3 35.7L342.1 136l-31-31-17-17L328 54.1l17 17 31 31L430.1 48 376 48l-24 0 0-48zM208 432a128 128 0 1 0 0-256 128 128 0 1 0 0 256z" />
    </Icon>
);

export default MarsStroke;