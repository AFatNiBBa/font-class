
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-screen-button` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen-button?s=sharp-solid tablet-screen-button}
 * @preview ![tablet-screen-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tablet-screen-button.svg)
 */
const TabletScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 0L448 0l0 512L0 512 0 0zM256 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 64L64 64l0 320 320 0 0-320z" />
    </Icon>
);

export default TabletScreenButton;