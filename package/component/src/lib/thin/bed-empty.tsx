
import { Icon } from "../../index";

/**
 * A component that renders the `bed-empty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=thin bed-empty}
 * @preview ![bed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bed-empty.svg)
 */
const BedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 200 0 328l0 80 0 64c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 608 0 0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-64 0-80 0-32c0-57.4-46.6-104-104-104L16 192 16 40zM624 320L16 320l0-112 520 0c48.6 0 88 39.4 88 88l0 24zM16 336l608 0 0 64L16 400l0-64z" />
    </Icon>
);

export default BedEmpty;