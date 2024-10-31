
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=light computer-mouse}
 * @preview ![computer-mouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/computer-mouse.svg)
 */
const ComputerMouse: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 224L32 224l0 128c0 70.7 57.3 128 128 128l64 0c70.7 0 128-57.3 128-128l0-128-160 0zm192-32l0 16 0 16 0 128c0 88.4-71.6 160-160 160l-64 0C71.6 512 0 440.4 0 352L0 224l0-16 0-16 0-32C0 71.6 71.6 0 160 0l16 0 16 0 16 0 16 0c88.4 0 160 71.6 160 160l0 32zM208 32l0 160 144 0 0-32c0-70.7-57.3-128-128-128l-16 0zm-32 0l-16 0C89.3 32 32 89.3 32 160l0 32 144 0 0-160z" />
    </Icon>
);

export default ComputerMouse;