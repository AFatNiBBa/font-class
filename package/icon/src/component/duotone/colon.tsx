
import { Icon, generic } from "../../index";

/**
 * A component that renders the `colon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon?s=duotone colon}
 * @preview ![colon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/colon.svg)
 */
const Colon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M32 384a64 64 0 1 0 128 0A64 64 0 1 0 32 384z" />
        <path d="M32 128a64 64 0 1 1 128 0A64 64 0 1 1 32 128z" />
    </Icon>
);

export default Colon;