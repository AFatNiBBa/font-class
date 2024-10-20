
import { Icon, generic } from "../../index";

/**
 * A component that renders the `i` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=duotone i}
 * @preview ![i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/i.svg)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l96 0 0 320-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0 0-320 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L160 32 32 32z" />
    </Icon>
);

export default I;