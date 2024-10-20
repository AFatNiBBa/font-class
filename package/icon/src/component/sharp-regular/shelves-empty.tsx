
import { Icon } from "../../index";

/**
 * A component that renders the `shelves-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves-empty?s=sharp-regular shelves-empty}
 * @preview ![shelves-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shelves-empty.svg)
 */
const ShelvesEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 24L48 0 0 0 0 24 0 160l0 24 0 24L0 416l0 24 0 24 0 24 0 24 48 0 0-24 0-24 544 0 0 24 0 24 48 0 0-24 0-24 0-24 0-24 0-208 0-24 0-24 0-136 0-24L592 0l0 24 0 136L48 160 48 24zm0 184l544 0 0 208L48 416l0-208z" />
    </Icon>
);

export default ShelvesEmpty;