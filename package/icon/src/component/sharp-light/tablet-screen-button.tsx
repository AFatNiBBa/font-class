
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-screen-button` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen-button?s=sharp-light tablet-screen-button}
 * @preview ![tablet-screen-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tablet-screen-button.svg)
 */
const TabletScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 32l0 288L32 320 32 32l384 0zm0 320l0 128L32 480l0-128 384 0zM32 0L0 0 0 32 0 480l0 32 32 0 384 0 32 0 0-32 0-448 0-32L416 0 32 0zM248 416a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default TabletScreenButton;