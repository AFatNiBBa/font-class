
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=sharp-duotone-solid left-long}
 * @preview ![left-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/left-long.svg)
 */
const LeftLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 192l0 128c42.7 0 85.3 0 128 0c64 0 128 0 192 0l0-128-320 0z" />
        <path d="M160 96L0 256 160 416l32 0s0 0 0 0l0-96 0-128 0-96-32 0z" />
    </Icon>
);

export default LeftLong;