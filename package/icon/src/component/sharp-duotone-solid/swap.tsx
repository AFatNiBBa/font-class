
import { Icon, generic } from "../../index";

/**
 * A component that renders the `swap` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap?s=sharp-duotone-solid swap}
 * @preview ![swap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/swap.svg)
 */
const Swap: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 32l0 32 0 192 64 0 0-160 128 0 0 256-80 0 0 40L512 512 624 392l0-40-80 0 0-288 0-32-32 0L320 32l-32 0z" />
        <path d="M128 0L16 120l0 40 80 0 0 288 0 32 32 0 192 0 32 0 0-32 0-192-64 0 0 160-128 0 0-256 80 0 0-40L128 0z" />
    </Icon>
);

export default Swap;