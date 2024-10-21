
import { Icon } from "../../index";

/**
 * A component that renders the `bed-front` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-front?s=sharp-light bed-front}
 * @preview ![bed-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bed-front.svg)
 */
const BedFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 32L32 32l0 16 0 80 0 16 0 80-16 0L0 224l0 16L0 400l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 448 0 0 48 0 16 32 0 0-16 0-64 0-160 0-16-16 0-16 0 0-80 0-16 0-80 0-16-16 0L48 32zm400 96l-176 0-16 0-16 0L64 128l0-64 384 0 0 64zM272 160l176 0 0 64-176 0 0-64zm-32 64L64 224l0-64 176 0 0 64zm240 32l0 128L32 384l0-128 208 0 32 0 176 0 32 0z" />
    </Icon>
);

export default BedFront;