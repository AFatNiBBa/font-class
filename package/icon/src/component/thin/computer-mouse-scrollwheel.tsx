
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse-scrollwheel` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse-scrollwheel?s=thin computer-mouse-scrollwheel}
 * @preview ![computer-mouse-scrollwheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/computer-mouse-scrollwheel.svg)
 */
const ComputerMouseScrollwheel: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 352l0-192c0-79.5-64.5-144-144-144l-64 0C80.5 16 16 80.5 16 160l0 192c0 79.5 64.5 144 144 144l64 0c79.5 0 144-64.5 144-144zM0 160C0 71.6 71.6 0 160 0l64 0c88.4 0 160 71.6 160 160l0 192c0 88.4-71.6 160-160 160l-64 0C71.6 512 0 440.4 0 352L0 160zm208-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32zm-48 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32z" />
    </Icon>
);

export default ComputerMouseScrollwheel;