
import { Icon, generic } from "../../index";

/**
 * A component that renders the `t` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=duotone t}
 * @preview ![t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/t.svg)
 */
const T: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l128 0 0 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352 128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 32 32 32z" />
    </Icon>
);

export default T;