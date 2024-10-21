
import { Icon } from "../../index";

/**
 * A component that renders the `bring-forward` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-forward?s=sharp-regular bring-forward}
 * @preview ![bring-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bring-forward.svg)
 */
const BringForward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 464l256 0 0-256-80 0 0-48 80 0 48 0 0 48 0 256 0 48-48 0-256 0-48 0 0-48 0-80 48 0 0 80zM0 352L0 0 352 0l0 352L0 352z" />
    </Icon>
);

export default BringForward;