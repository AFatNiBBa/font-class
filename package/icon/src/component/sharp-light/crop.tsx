
import { Icon } from "../../index";

/**
 * A component that renders the `crop` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop?s=sharp-light crop}
 * @preview ![crop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/crop.svg)
 */
const Crop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l0 16 0 345.4L361.4 128 160 128l0-32 233.4 0 83.3-83.3L488 1.4 510.6 24 499.3 35.3 416 118.6 416 384l80 0 16 0 0 32-16 0-80 0 0 80 0 16-32 0 0-16 0-345.4L150.6 384 352 384l0 32-240 0-16 0 0-16 0-272-80 0L0 128 0 96l16 0 80 0 0-80L96 0l32 0z" />
    </Icon>
);

export default Crop;