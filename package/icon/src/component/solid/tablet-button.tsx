
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-button` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-button?s=solid tablet-button}
 * @preview ![tablet-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/tablet-button.svg)
 */
const TabletButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM224 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default TabletButton;