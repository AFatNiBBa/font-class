
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-screen` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen?s=sharp-thin tablet-screen}
 * @preview ![tablet-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tablet-screen.svg)
 */
const TabletScreen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 16l0 368L16 384 16 16l416 0zm0 384l0 96L16 496l0-96 416 0zM16 0L0 0 0 16 0 496l0 16 16 0 416 0 16 0 0-16 0-480 0-16L432 0 16 0zM168 440l0 16 8 0 96 0 8 0 0-16-8 0-96 0-8 0z" />
    </Icon>
);

export default TabletScreen;