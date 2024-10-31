
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=sharp-regular computer-mouse}
 * @preview ![computer-mouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/computer-mouse.svg)
 */
const ComputerMouse: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 224L48 224l0 128c0 61.9 50.1 112 112 112l64 0c61.9 0 112-50.1 112-112l0-128-144 0zm192-48l0 24 0 24 0 128c0 88.4-71.6 160-160 160l-64 0C71.6 512 0 440.4 0 352L0 224l0-24 0-24L0 48 0 0 48 0 168 0l24 0 24 0L336 0l48 0 0 48 0 128zM336 48L216 48l0 128 120 0 0-128zM168 48L48 48l0 128 120 0 0-128z" />
    </Icon>
);

export default ComputerMouse;