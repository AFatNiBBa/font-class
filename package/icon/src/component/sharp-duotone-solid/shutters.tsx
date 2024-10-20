
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shutters` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shutters?s=sharp-duotone-solid shutters}
 * @preview ![shutters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shutters.svg)
 */
const Shutters: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l512 0-24-96L24 128 0 224zM0 352l512 0-24-96L24 256 0 352zM0 480l512 0-24-96L24 384 0 480z" />
        <path d="M0 32l32 0 448 0 32 0 0 64-32 0L32 96 0 96 0 32z" />
    </Icon>
);

export default Shutters;