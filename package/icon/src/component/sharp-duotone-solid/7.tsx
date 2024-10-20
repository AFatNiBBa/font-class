
import { Icon, generic } from "../../index";

/**
 * A component that renders the `7` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/7?s=sharp-duotone-solid 7}
 * @preview ![7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/7.svg)
 */
const $7: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M320 32l0 39.9-3.7 7L104.6 480l-72.4 0L234.9 96 32 96 0 96 0 32l32 0 256 0 32 0z" />
    </Icon>
);

export default $7;