
import { Icon } from "../../index";

/**
 * A component that renders the `crop` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop?s=light crop}
 * @preview ![crop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/crop.svg)
 */
const Crop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 118.6l91.3-91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L393.4 96 160 96l0 32 201.4 0L128 361.4 128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 240c0 26.5 21.5 48 48 48l208 0 0-32-201.4 0L384 150.6 384 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0 0-265.4z" />
    </Icon>
);

export default Crop;