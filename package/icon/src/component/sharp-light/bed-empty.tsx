
import { Icon } from "../../index";

/**
 * A component that renders the `bed-empty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=sharp-light bed-empty}
 * @preview ![bed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bed-empty.svg)
 */
const BedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 48l0-16L0 32 0 48 0 208 0 336l0 64 0 64 0 16 32 0 0-16 0-48 576 0 0 48 0 16 32 0 0-16 0-64 0-64 0-128 0-16-16 0L32 192 32 48zM608 320L32 320l0-96 576 0 0 96zM32 352l576 0 0 32L32 384l0-32z" />
    </Icon>
);

export default BedEmpty;