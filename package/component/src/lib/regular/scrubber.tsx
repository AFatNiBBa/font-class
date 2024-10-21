
import { Icon } from "../../index";

/**
 * A component that renders the `scrubber` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scrubber?s=regular scrubber}
 * @preview ![scrubber](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/scrubber.svg)
 */
const Scrubber: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Scrubber;