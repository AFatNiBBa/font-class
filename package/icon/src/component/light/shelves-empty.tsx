
import { Icon } from "../../index";

/**
 * A component that renders the `shelves-empty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves-empty?s=light shelves-empty}
 * @preview ![shelves-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shelves-empty.svg)
 */
const ShelvesEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 16C32 7.2 24.8 0 16 0S0 7.2 0 16L0 176 0 432l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 576 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64 0-256 0-160c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 144L32 160 32 16zm0 176l576 0 0 224L32 416l0-224z" />
    </Icon>
);

export default ShelvesEmpty;