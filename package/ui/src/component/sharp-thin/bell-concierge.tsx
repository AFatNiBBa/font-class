
import { Icon } from "../../index";

/**
 * A component that renders the `bell-concierge` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-concierge?s=sharp-thin bell-concierge}
 * @preview ![bell-concierge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bell-concierge.svg)
 */
const BellConcierge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M200 64l-8 0 0 16 8 0 48 0 0 64.1C128 148.4 32 247 32 368l0 32 16 0 0-32c0-114.9 93.1-208 208-208s208 93.1 208 208l0 32 16 0 0-32c0-121-96-219.6-216-223.9L264 80l48 0 8 0 0-16-8 0-56 0-56 0zM8 432l-8 0 0 16 8 0 496 0 8 0 0-16-8 0L8 432z" />
    </Icon>
);

export default BellConcierge;