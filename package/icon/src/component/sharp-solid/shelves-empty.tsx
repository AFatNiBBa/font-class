
import { Icon } from "../../index";

/**
 * A component that renders the `shelves-empty` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves-empty?s=sharp-solid shelves-empty}
 * @preview ![shelves-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shelves-empty.svg)
 */
const ShelvesEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 32L64 0 0 0 0 32 0 160l0 32 0 32L0 416l0 32 0 32 0 32 64 0 0-32 512 0 0 32 64 0 0-32 0-32 0-32 0-192 0-32 0-32 0-128 0-32L576 0l0 32 0 128L64 160 64 32zm0 192l512 0 0 192L64 416l0-192z" />
    </Icon>
);

export default ShelvesEmpty;