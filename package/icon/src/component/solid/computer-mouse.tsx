
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=solid computer-mouse}
 * @preview ![computer-mouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/computer-mouse.svg)
 */
const ComputerMouse: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 192l176 0L176 0 160 0C71.6 0 0 71.6 0 160l0 32zm0 32L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-128-192 0L0 224zm384-32l0-32C384 71.6 312.4 0 224 0L208 0l0 192 176 0z" />
    </Icon>
);

export default ComputerMouse;