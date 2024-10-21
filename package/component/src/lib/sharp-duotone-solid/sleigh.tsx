
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sleigh` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sleigh?s=sharp-duotone-solid sleigh}
 * @preview ![sleigh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sleigh.svg)
 */
const Sleigh: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 416l0 64 32 0 544 0 32 0 0-32 0-64 0-32-64 0 0 32 0 32-128 0-64 0-192 0-64 0-64 0-32 0z" />
        <path d="M0 32l32 0 23 0 1 0s0 0 0 0c60 .4 115.6 31.4 147.4 82.3C246.1 182.5 320.9 224 401.4 224l46.6 0 0-128 32 0 32 0 32 0 32 0 0 64-32 0 0 96c0 53-43 96-96 96l0 64-64 0 0-64-192 0 0 64-64 0 0-64c-53 0-96-43-96-96L32 96 0 96 0 32z" />
    </Icon>
);

export default Sleigh;