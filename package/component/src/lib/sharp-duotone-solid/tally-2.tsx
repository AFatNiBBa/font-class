
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tally-2` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tally-2?s=sharp-duotone-solid tally-2}
 * @preview ![tally-2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tally-2.svg)
 */
const Tally_2: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 32 0 384 0 32 64 0 0-32 0-384 0-32L96 32z" />
        <path d="M288 32l0 32 0 384 0 32-64 0 0-32 0-384 0-32 64 0z" />
    </Icon>
);

export default Tally_2;