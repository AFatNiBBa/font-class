
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-off` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-off?s=regular toggle-large-off}
 * @preview ![toggle-large-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/toggle-large-off.svg)
 */
const ToggleLargeOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 400a144 144 0 1 1 0-288 144 144 0 1 1 0 288zm0 48l192 0c106 0 192-86 192-192s-86-192-192-192L192 64C86 64 0 150 0 256S86 448 192 448zm127-48c39.9-35.2 65-86.7 65-144s-25.1-108.8-65-144l65 0c79.5 0 144 64.5 144 144s-64.5 144-144 144l-65 0z" />
    </Icon>
);

export default ToggleLargeOff;