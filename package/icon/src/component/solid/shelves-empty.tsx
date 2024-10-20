
import { Icon } from "../../index";

/**
 * A component that renders the `shelves-empty` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves-empty?s=solid shelves-empty}
 * @preview ![shelves-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/shelves-empty.svg)
 */
const ShelvesEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 192 0 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l512 0c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 0-256 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 160 64 32zm0 192l512 0 0 192L64 416l0-192z" />
    </Icon>
);

export default ShelvesEmpty;