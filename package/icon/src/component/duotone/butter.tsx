
import { Icon, generic } from "../../index";

/**
 * A component that renders the `butter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/butter?s=duotone butter}
 * @preview ![butter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/butter.svg)
 */
const Butter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 128l0 192 384 0 0-256L128 64c-35.3 0-64 28.7-64 64zM480 64l0 256 96 0 0-192c0-35.3-28.7-64-64-64l-32 0z" />
        <path d="M32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c0 17.7 14.3 32 32 32l512 0c17.7 0 32-14.3 32-32l0-32c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320z" />
    </Icon>
);

export default Butter;