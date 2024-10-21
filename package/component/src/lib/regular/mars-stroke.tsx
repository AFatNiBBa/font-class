
import { Icon } from "../../index";

/**
 * A component that renders the `mars-stroke` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke?s=regular mars-stroke}
 * @preview ![mars-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mars-stroke.svg)
 */
const MarsStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 24c0-13.3 10.7-24 24-24L488 0c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-54.1L409.9 136l31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31-27.7 27.7C370.7 227.2 384 264.1 384 304c0 97.2-78.8 176-176 176s-176-78.8-176-176s78.8-176 176-176c39.9 0 76.8 13.3 106.3 35.7L342.1 136l-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L430.1 48 376 48c-13.3 0-24-10.7-24-24zM208 432a128 128 0 1 0 0-256 128 128 0 1 0 0 256z" />
    </Icon>
);

export default MarsStroke;