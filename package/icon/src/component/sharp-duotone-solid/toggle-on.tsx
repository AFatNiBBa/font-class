
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=sharp-duotone-solid toggle-on}
 * @preview ![toggle-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toggle-on.svg)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l576 0 0-384L0 64zm288 96l192 0 0 192-192 0 0-192z" />
        <path d="M480 160H288V352H480V160z" />
    </Icon>
);

export default ToggleOn;