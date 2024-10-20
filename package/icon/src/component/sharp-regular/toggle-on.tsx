
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=sharp-regular toggle-on}
 * @preview ![toggle-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/toggle-on.svg)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 112l0 288 480 0 0-288L48 112zM0 64l48 0 480 0 48 0 0 48 0 288 0 48-48 0L48 448 0 448l0-48L0 112 0 64zm480 96l0 192-192 0 0-192 192 0z" />
    </Icon>
);

export default ToggleOn;