
import { Icon } from "../../index";

/**
 * A component that renders the `bed-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=sharp-regular bed-empty}
 * @preview ![bed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bed-empty.svg)
 */
const BedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 56l0-24L0 32 0 56 0 160l0 48L0 360l0 96 0 24 48 0 0-24 0-72 544 0 0 80 0 24 48 0 0-24 0-104 0-176 0-24-24 0L48 160 48 56zM592 336L48 336l0-128 544 0 0 128z" />
    </Icon>
);

export default BedEmpty;