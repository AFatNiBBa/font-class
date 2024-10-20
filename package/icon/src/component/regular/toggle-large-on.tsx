
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-on` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-on?s=regular toggle-large-on}
 * @preview ![toggle-large-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/toggle-large-on.svg)
 */
const ToggleLargeOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 48a144 144 0 1 1 0 288 144 144 0 1 1 0-288z" />
    </Icon>
);

export default ToggleLargeOn;