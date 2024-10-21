
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toggle-off` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=sharp-duotone-solid toggle-off}
 * @preview ![toggle-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toggle-off.svg)
 */
const ToggleOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 64L0 384l0 64 64 0 448 0 64 0 0-64 0-256 0-64-64 0L64 64 0 64zm64 64l448 0 0 256L64 384l0-256z" />
        <path d="M288 160H96V352H288V160z" />
    </Icon>
);

export default ToggleOff;