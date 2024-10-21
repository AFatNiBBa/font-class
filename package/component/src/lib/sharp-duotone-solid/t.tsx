
import { Icon, generic } from "../../index";

/**
 * A component that renders the `t` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=sharp-duotone-solid t}
 * @preview ![t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/t.svg)
 */
const T: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 32L0 32 0 96l32 0 128 0 0 352 0 32 64 0 0-32 0-352 128 0 32 0 0-64-32 0L224 32l-32 0-32 0L32 32z" />
    </Icon>
);

export default T;