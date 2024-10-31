
import { Icon, generic } from "../../index";

/**
 * A component that renders the `i` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=sharp-duotone-solid i}
 * @preview ![i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/i.svg)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32 32L0 32 0 96l32 0 96 0 0 320-96 0L0 416l0 64 32 0 96 0 64 0 96 0 32 0 0-64-32 0-96 0 0-320 96 0 32 0 0-64-32 0-96 0-32 0-32 0L32 32z" />
    </Icon>
);

export default I;