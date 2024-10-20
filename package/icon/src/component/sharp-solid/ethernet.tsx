
import { Icon } from "../../index";

/**
 * A component that renders the `ethernet` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ethernet?s=sharp-solid ethernet}
 * @preview ![ethernet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ethernet.svg)
 */
const Ethernet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 192L0 448l96 0 0-112 0-16 32 0 0 16 0 112 64 0 0-112 0-16 32 0 0 16 0 112 64 0 0-112 0-16 32 0 0 16 0 112 64 0 0-112 0-16 32 0 0 16 0 112 96 0 0-256-64 0 0-64-64 0 0-64L128 64l0 64-64 0 0 64L0 192z" />
    </Icon>
);

export default Ethernet;