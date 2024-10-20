
import { Icon } from "../../index";

/**
 * A component that renders the `bed-empty` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=solid bed-empty}
 * @preview ![bed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bed-empty.svg)
 */
const BedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 256l0 96 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 288 0 224 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128c0-53-43-96-96-96L64 224 64 64z" />
    </Icon>
);

export default BedEmpty;