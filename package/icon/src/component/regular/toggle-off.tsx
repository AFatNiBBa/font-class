
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-off` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=regular toggle-off}
 * @preview ![toggle-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/toggle-off.svg)
 */
const ToggleOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 112c79.5 0 144 64.5 144 144s-64.5 144-144 144l-192 0c-79.5 0-144-64.5-144-144s64.5-144 144-144l192 0zM576 256c0-106-86-192-192-192L192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192zm-336 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM96 256a96 96 0 1 0 192 0A96 96 0 1 0 96 256z" />
    </Icon>
);

export default ToggleOff;