
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse-scrollwheel` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse-scrollwheel?s=sharp-light computer-mouse-scrollwheel}
 * @preview ![computer-mouse-scrollwheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/computer-mouse-scrollwheel.svg)
 */
const ComputerMouseScrollwheel: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 480c70.7 0 128-57.3 128-128l0-320L32 32l0 320c0 70.7 57.3 128 128 128l64 0zM0 0L32 0 352 0l32 0 0 32 0 320c0 88.4-71.6 160-160 160l-64 0C71.6 512 0 440.4 0 352L0 32 0 0zM208 112l0 64 0 16-32 0 0-16 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default ComputerMouseScrollwheel;