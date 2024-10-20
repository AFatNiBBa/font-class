
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse-scrollwheel` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse-scrollwheel?s=solid computer-mouse-scrollwheel}
 * @preview ![computer-mouse-scrollwheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/computer-mouse-scrollwheel.svg)
 */
const ComputerMouseScrollwheel: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M160 0C71.6 0 0 71.6 0 160L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-192C384 71.6 312.4 0 224 0L160 0zm64 128l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
    </Icon>
);

export default ComputerMouseScrollwheel;