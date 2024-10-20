
import { Icon, generic } from "../../index";

/**
 * A component that renders the `u` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=sharp-duotone-solid u}
 * @preview ![u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/u.svg)
 */
const U: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 32l0 32 0 224c0 70.7 57.3 128 128 128s128-57.3 128-128l0-224 0-32 64 0 0 32 0 224c0 106-86 192-192 192S0 394 0 288L0 64 0 32l64 0z" />
    </Icon>
);

export default U;