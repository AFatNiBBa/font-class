
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-on` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-on?s=sharp-regular toggle-large-on}
 * @preview ![toggle-large-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/toggle-large-on.svg)
 */
const ToggleLargeOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 64L0 64 0 448l576 0 0-384zm-48 48l0 288-288 0 0-288 288 0z" />
    </Icon>
);

export default ToggleLargeOn;