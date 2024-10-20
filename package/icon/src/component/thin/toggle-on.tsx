
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=thin toggle-on}
 * @preview ![toggle-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/toggle-on.svg)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 112C80.5 112 16 176.5 16 256s64.5 144 144 144l256 0c79.5 0 144-64.5 144-144s-64.5-144-144-144l-256 0zM0 256C0 167.6 71.6 96 160 96l256 0c88.4 0 160 71.6 160 160s-71.6 160-160 160l-256 0C71.6 416 0 344.4 0 256zm496 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-176 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default ToggleOn;