
import { Icon } from "../../index";

/**
 * A component that renders the `shelves-empty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves-empty?s=regular shelves-empty}
 * @preview ![shelves-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shelves-empty.svg)
 */
const ShelvesEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24L0 184 0 440l0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-24 544 0 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48 0-256 0-160c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 136L48 160 48 24zm0 184l544 0 0 208L48 416l0-208z" />
    </Icon>
);

export default ShelvesEmpty;