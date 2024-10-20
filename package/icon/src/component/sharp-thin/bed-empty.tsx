
import { Icon } from "../../index";

/**
 * A component that renders the `bed-empty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=sharp-thin bed-empty}
 * @preview ![bed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bed-empty.svg)
 */
const BedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 40l0-8L0 32l0 8L0 200 0 328l0 80 0 64 0 8 16 0 0-8 0-56 608 0 0 56 0 8 16 0 0-8 0-64 0-80 0-128 0-8-8 0L16 192 16 40zM624 320L16 320l0-112 608 0 0 112zM16 336l608 0 0 64L16 400l0-64z" />
    </Icon>
);

export default BedEmpty;