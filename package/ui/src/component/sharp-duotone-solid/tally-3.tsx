
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tally-3` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tally-3?s=sharp-duotone-solid tally-3}
 * @preview ![tally-3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tally-3.svg)
 */
const Tally_3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 32 0 384 0 32 64 0 0-32 0-384 0-32L96 32zm128 0l0 32 0 384 0 32 64 0 0-32 0-384 0-32-64 0z" />
        <path d="M416 32l0 32 0 384 0 32-64 0 0-32 0-384 0-32 64 0z" />
    </Icon>
);

export default Tally_3;