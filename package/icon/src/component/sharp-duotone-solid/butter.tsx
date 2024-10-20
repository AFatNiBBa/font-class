
import { Icon, generic } from "../../index";

/**
 * A component that renders the `butter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/butter?s=sharp-duotone-solid butter}
 * @preview ![butter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/butter.svg)
 */
const Butter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 64l0 256 384 0 0-256L64 64zm416 0l0 256 96 0 0-256-96 0z" />
        <path d="M32 320L0 320l0 64 32 0 0 64 576 0 0-64 32 0 0-64-32 0L32 320z" />
    </Icon>
);

export default Butter;