
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-screen-button` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen-button?s=thin tablet-screen-button}
 * @preview ![tablet-screen-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tablet-screen-button.svg)
 */
const TabletScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 16c26.5 0 48 21.5 48 48l0 288L16 352 16 64c0-26.5 21.5-48 48-48l320 0zm48 352l0 80c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-80 416 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM224 448a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm-32-16a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default TabletScreenButton;