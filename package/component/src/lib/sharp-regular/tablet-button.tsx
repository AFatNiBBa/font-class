
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-button` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-button?s=sharp-regular tablet-button}
 * @preview ![tablet-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tablet-button.svg)
 */
const TabletButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 48l0 416 352 0 0-416L48 48zM0 0L48 0 400 0l48 0 0 48 0 416 0 48-48 0L48 512 0 512l0-48L0 48 0 0zM224 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default TabletButton;