
import { Icon, generic } from "../../index";

/**
 * A component that renders the `computer-mouse` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=duotone computer-mouse}
 * @preview ![computer-mouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/computer-mouse.svg)
 */
const ComputerMouse: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 160C0 71.6 71.6 0 160 0l16 0 0 192L0 192l0-32zm0 64l192 0 192 0 0 128c0 88.4-71.6 160-160 160l-64 0C71.6 512 0 440.4 0 352L0 224zM208 0l16 0c88.4 0 160 71.6 160 160l0 32-176 0L208 0z" />
        <path d="M176 192L0 192l0 32 192 0 192 0 0-32-176 0L208 0 176 0l0 192z" />
    </Icon>
);

export default ComputerMouse;