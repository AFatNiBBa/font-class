
import { Icon, generic } from "../../index";

/**
 * A component that renders the `custard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/custard?s=sharp-duotone-solid custard}
 * @preview ![custard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/custard.svg)
 */
const Custard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 352L96.3 206.8c26.6-7.6 53.1-15.2 79.7-22.8c37.3 10.7 74.7 21.3 112 32c37.3-10.7 74.7-21.3 112-32l79.7 22.8L512 352 64 352z" />
        <path d="M128 64l320 0 31.7 142.8L400 184 288 216 176 184 96.3 206.8 128 64zM32 384l512 0 32 0 0 64-32 0L32 448 0 448l0-64 32 0z" />
    </Icon>
);

export default Custard;