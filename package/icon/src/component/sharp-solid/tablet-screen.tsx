
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-screen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen?s=sharp-solid tablet-screen}
 * @preview ![tablet-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tablet-screen.svg)
 */
const TabletScreen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 0L448 0l0 512L0 512 0 0zM160 432l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0zM384 64L64 64l0 320 320 0 0-320z" />
    </Icon>
);

export default TabletScreen;