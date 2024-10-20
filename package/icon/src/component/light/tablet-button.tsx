
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-button` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-button?s=light tablet-button}
 * @preview ![tablet-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tablet-button.svg)
 */
const TabletButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L64 32zM0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM224 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default TabletButton;