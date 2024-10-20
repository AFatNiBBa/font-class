
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-screen` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen?s=sharp-light tablet-screen}
 * @preview ![tablet-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tablet-screen.svg)
 */
const TabletScreen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 32l0 288L32 320 32 32l384 0zm0 320l0 128L32 480l0-128 384 0zM32 0L0 0 0 32 0 480l0 32 32 0 384 0 32 0 0-32 0-448 0-32L416 0 32 0zM176 400l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0z" />
    </Icon>
);

export default TabletScreen;