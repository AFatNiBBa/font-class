
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=regular toggle-on}
 * @preview ![toggle-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/toggle-on.svg)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 112c-79.5 0-144 64.5-144 144s64.5 144 144 144l192 0c79.5 0 144-64.5 144-144s-64.5-144-144-144l-192 0zM0 256C0 150 86 64 192 64l192 0c106 0 192 86 192 192s-86 192-192 192l-192 0C86 448 0 362 0 256zm384-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default ToggleOn;