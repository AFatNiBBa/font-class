
import { Icon } from "../../index";

/**
 * A component that renders the `shelves-empty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves-empty?s=sharp-light shelves-empty}
 * @preview ![shelves-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shelves-empty.svg)
 */
const ShelvesEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 16L32 0 0 0 0 16 0 160l0 16 0 16L0 416l0 16 0 16 0 48 0 16 32 0 0-16 0-48 576 0 0 48 0 16 32 0 0-16 0-48 0-16 0-16 0-224 0-16 0-16 0-144 0-16L608 0l0 16 0 144L32 160 32 16zm0 176l576 0 0 224L32 416l0-224z" />
    </Icon>
);

export default ShelvesEmpty;