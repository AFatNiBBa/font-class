
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse-scrollwheel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse-scrollwheel?s=sharp-solid computer-mouse-scrollwheel}
 * @preview ![computer-mouse-scrollwheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/computer-mouse-scrollwheel.svg)
 */
const ComputerMouseScrollwheel: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L0 0 0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160L384 0zM224 128l0 32 0 32-64 0 0-32 0-32 0-32 64 0 0 32z" />
    </Icon>
);

export default ComputerMouseScrollwheel;