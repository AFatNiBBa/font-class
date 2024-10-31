
import { Icon } from "../../index";

/**
 * A component that renders the `bed-empty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=light bed-empty}
 * @preview ![bed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bed-empty.svg)
 */
const BedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48L0 208 0 336l0 64 0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 576 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64 0-64 0-32c0-61.9-50.1-112-112-112L32 192 32 48zM608 320L32 320l0-96 496 0c44.2 0 80 35.8 80 80l0 16zM32 352l576 0 0 32L32 384l0-32z" />
    </Icon>
);

export default BedEmpty;