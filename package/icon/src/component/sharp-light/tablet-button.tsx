
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-button` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-button?s=sharp-light tablet-button}
 * @preview ![tablet-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tablet-button.svg)
 */
const TabletButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32l0 448 384 0 0-448L32 32zM0 0L32 0 416 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM224 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default TabletButton;