
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-button` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-button?s=sharp-thin tablet-button}
 * @preview ![tablet-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tablet-button.svg)
 */
const TabletButton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 16l0 480 416 0 0-480L16 16zM0 0L16 0 432 0l16 0 0 16 0 480 0 16-16 0L16 512 0 512l0-16L0 16 0 0zM208 432a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default TabletButton;