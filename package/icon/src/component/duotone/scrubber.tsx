
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scrubber` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scrubber?s=duotone scrubber}
 * @preview ![scrubber](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scrubber.svg)
 */
const Scrubber: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-320a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default Scrubber;