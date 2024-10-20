
import { Icon } from "../../index";

/**
 * A component that renders the `shelves-empty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves-empty?s=sharp-thin shelves-empty}
 * @preview ![shelves-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shelves-empty.svg)
 */
const ShelvesEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 8l0-8L0 0 0 8 0 176l0 8 0 8L0 432l0 8 0 8 0 56 0 8 16 0 0-8 0-56 608 0 0 56 0 8 16 0 0-8 0-56 0-8 0-8 0-240 0-8 0-8L640 8l0-8L624 0l0 8 0 168L16 176 16 8zm0 184l608 0 0 240L16 432l0-240z" />
    </Icon>
);

export default ShelvesEmpty;