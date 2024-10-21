
import { Icon } from "../../index";

/**
 * A component that renders the `honey-pot` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/honey-pot?s=solid honey-pot}
 * @preview ![honey-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/honey-pot.svg)
 */
const HoneyPot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 32L64 32C46.3 32 32 46.3 32 64s14.3 32 32 32C25.1 125.2 0 171.7 0 224C0 362.8 79.6 441.9 113.3 469.1c9.3 7.5 21.1 10.9 33.1 10.9l155.3 0c12 0 23.7-3.3 33.1-10.9C368.4 441.9 448 362.8 448 224c0-52.3-25.1-98.8-64-128c17.7 0 32-14.3 32-32s-14.3-32-32-32L176 32l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104zM64 224l320 0c0 53.7-14.7 96.1-32.9 128L96.9 352C78.7 320.1 64 277.7 64 224z" />
    </Icon>
);

export default HoneyPot;