
import { Icon } from "../../index";

/**
 * A component that renders the `honey-pot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/honey-pot?s=sharp-solid honey-pot}
 * @preview ![honey-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/honey-pot.svg)
 */
const HoneyPot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 32L64 32 32 32l0 64 32 0C25.1 125.2 0 171.7 0 224C0 400 128 480 128 480l192 0s128-80 128-256c0-52.3-25.1-98.8-64-128l32 0 0-64-32 0L176 32l0 104 0 24-48 0 0-24 0-104zM96.9 352C78.7 320.3 64 278.1 64 224l320 0c0 54.1-14.7 96.3-32.9 128L96.9 352z" />
    </Icon>
);

export default HoneyPot;