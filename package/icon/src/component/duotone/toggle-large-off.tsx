
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toggle-large-off` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-off?s=duotone toggle-large-off}
 * @preview ![toggle-large-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toggle-large-off.svg)
 */
const ToggleLargeOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 362 86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64C86 64 0 150 0 256zm64 0c0-70.7 57.3-128 128-128l192 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-192 0c-70.7 0-128-57.3-128-128z" />
        <path d="M192 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256z" />
    </Icon>
);

export default ToggleLargeOff;