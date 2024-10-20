
import { Icon } from "../../index";

/**
 * A component that renders the `honey-pot` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/honey-pot?s=regular honey-pot}
 * @preview ![honey-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/honey-pot.svg)
 */
const HoneyPot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M78.6 352c21.5 40.9 49 67 64.6 79.6c0 0 .1 0 .1 0c.4 .1 1.4 .4 3.1 .4l155.3 0c1.6 0 2.6-.2 3.1-.4c0 0 .1 0 .1 0c15.5-12.6 43.1-38.7 64.6-79.6L78.6 352zM48 224l352 0c0-79.5-64.5-144-144-144l-64 0c-5.4 0-10.7 .3-16 .9l0 55.1c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-41c-47.4 23.6-80 72.5-80 129zM56 32l96 0 40 0 64 0 136 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-9 0c39.9 35.2 65 86.7 65 144c0 138.8-79.6 217.9-113.3 245.1c-9.3 7.5-21.1 10.9-33.1 10.9l-155.3 0c-12 0-23.7-3.3-33.1-10.9C79.6 441.9 0 362.8 0 224C0 166.7 25.1 115.2 65 80l-9 0C42.7 80 32 69.3 32 56s10.7-24 24-24z" />
    </Icon>
);

export default HoneyPot;