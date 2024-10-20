
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse-scrollwheel` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse-scrollwheel?s=sharp-regular computer-mouse-scrollwheel}
 * @preview ![computer-mouse-scrollwheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/computer-mouse-scrollwheel.svg)
 */
const ComputerMouseScrollwheel: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 464c61.9 0 112-50.1 112-112l0-304L48 48l0 304c0 61.9 50.1 112 112 112l64 0zM0 0L48 0 336 0l48 0 0 48 0 304c0 88.4-71.6 160-160 160l-64 0C71.6 512 0 440.4 0 352L0 48 0 0zM224 96l0 96-64 0 0-96 64 0z" />
    </Icon>
);

export default ComputerMouseScrollwheel;