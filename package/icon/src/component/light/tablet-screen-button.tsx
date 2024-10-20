
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-screen-button` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen-button?s=light tablet-screen-button}
 * @preview ![tablet-screen-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tablet-screen-button.svg)
 */
const TabletScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 32c17.7 0 32 14.3 32 32l0 256L32 320 32 64c0-17.7 14.3-32 32-32l320 0zm32 320l0 96c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-96 384 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM248 416a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default TabletScreenButton;