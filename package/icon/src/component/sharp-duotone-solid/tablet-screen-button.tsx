
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet-screen-button` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen-button?s=sharp-duotone-solid tablet-screen-button}
 * @preview ![tablet-screen-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tablet-screen-button.svg)
 */
const TabletScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L448 0l0 512L0 512 0 0zM64 64l0 320 48 0 224 0 48 0 0-320-48 0L112 64 64 64zM192 448a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M64 64H384V384H64V64z" />
    </Icon>
);

export default TabletScreenButton;