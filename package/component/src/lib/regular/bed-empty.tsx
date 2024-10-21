
import { Icon } from "../../index";

/**
 * A component that renders the `bed-empty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=regular bed-empty}
 * @preview ![bed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bed-empty.svg)
 */
const BedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56L0 184 0 360l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 544 0 0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104 0-80c0-66.3-53.7-120-120-120L48 160 48 56zM592 336L48 336l0-128 472 0c39.8 0 72 32.2 72 72l0 56z" />
    </Icon>
);

export default BedEmpty;