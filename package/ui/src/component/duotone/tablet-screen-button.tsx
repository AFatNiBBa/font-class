
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet-screen-button` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen-button?s=duotone tablet-screen-button}
 * @preview ![tablet-screen-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tablet-screen-button.svg)
 */
const TabletScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm64 0l0 320 320 0 0-320L64 64zM192 448a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M64 64H384V384H64V64z" />
    </Icon>
);

export default TabletScreenButton;