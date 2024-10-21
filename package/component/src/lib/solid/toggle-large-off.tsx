
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-off` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-off?s=solid toggle-large-off}
 * @preview ![toggle-large-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/toggle-large-off.svg)
 */
const ToggleLargeOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256zm0 64l192 0c106 0 192-86 192-192s-86-192-192-192L192 64C86 64 0 150 0 256S86 448 192 448zm143.1-64c30.4-34 48.9-78.8 48.9-128s-18.5-94-48.9-128l48.9 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-48.9 0z" />
    </Icon>
);

export default ToggleLargeOff;