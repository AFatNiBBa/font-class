
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=sharp-light computer-mouse}
 * @preview ![computer-mouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/computer-mouse.svg)
 */
const ComputerMouse: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 224L32 224l0 128c0 70.7 57.3 128 128 128l64 0c70.7 0 128-57.3 128-128l0-128-160 0zm192-32l0 16 0 16 0 128c0 88.4-71.6 160-160 160l-64 0C71.6 512 0 440.4 0 352L0 224l0-16 0-16L0 32 0 0 32 0 176 0l16 0 16 0L352 0l32 0 0 32 0 160zM352 32L208 32l0 160 144 0 0-160zM176 32L32 32l0 160 144 0 0-160z" />
    </Icon>
);

export default ComputerMouse;