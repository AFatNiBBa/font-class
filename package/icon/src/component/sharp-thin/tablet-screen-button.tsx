
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-screen-button` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen-button?s=sharp-thin tablet-screen-button}
 * @preview ![tablet-screen-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tablet-screen-button.svg)
 */
const TabletScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 16l0 336L16 352 16 16l416 0zm0 352l0 128L16 496l0-128 416 0zM16 0L0 0 0 16 0 496l0 16 16 0 416 0 16 0 0-16 0-480 0-16L432 0 16 0zM224 448a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm-32-16a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default TabletScreenButton;