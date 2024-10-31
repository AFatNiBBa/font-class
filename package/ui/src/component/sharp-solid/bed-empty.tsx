
import { Icon } from "../../index";

/**
 * A component that renders the `bed-empty` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=sharp-solid bed-empty}
 * @preview ![bed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bed-empty.svg)
 */
const BedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 64l0-32L0 32 0 64 0 256l0 96 0 32 0 64 0 32 64 0 0-32 0-32 288 0 224 0 0 32 0 32 64 0 0-32 0-192 0-32-32 0L64 224 64 64z" />
    </Icon>
);

export default BedEmpty;