
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=solid toggle-on}
 * @preview ![toggle-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/toggle-on.svg)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default ToggleOn;