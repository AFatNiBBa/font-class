
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tally-4` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tally-4?s=sharp-duotone-solid tally-4}
 * @preview ![tally-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tally-4.svg)
 */
const Tally_4: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 32 0 384 0 32 64 0 0-32 0-384 0-32L96 32zm128 0l0 32 0 384 0 32 64 0 0-32 0-384 0-32-64 0zm128 0l0 32 0 384 0 32 64 0 0-32 0-384 0-32-64 0z" />
        <path d="M544 32l0 32 0 384 0 32-64 0 0-32 0-384 0-32 64 0z" />
    </Icon>
);

export default Tally_4;