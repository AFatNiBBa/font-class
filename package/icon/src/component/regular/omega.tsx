
import { Icon } from "../../index";

/**
 * A component that renders the `omega` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/omega?s=regular omega}
 * @preview ![omega](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/omega.svg)
 */
const Omega: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 80C126.8 80 48 158.8 48 256c0 63.7 33.8 119.5 84.6 150.4c11.4 7 19.4 19.6 19.4 34.2c0 21.8-17.6 39.4-39.4 39.4L24 480c-13.3 0-24-10.7-24-24s10.7-24 24-24l61.4 0C33.4 391 0 327.4 0 256C0 132.3 100.3 32 224 32s224 100.3 224 224c0 71.4-33.4 135-85.4 176l61.4 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88.6 0c-21.8 0-39.4-17.6-39.4-39.4c0-14.6 8-27.2 19.4-34.2C366.2 375.5 400 319.7 400 256c0-97.2-78.8-176-176-176z" />
    </Icon>
);

export default Omega;