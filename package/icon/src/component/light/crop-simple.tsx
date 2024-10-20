
import { Icon } from "../../index";

/**
 * A component that renders the `crop-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop-simple?s=light crop-simple}
 * @preview ![crop-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/crop-simple.svg)
 */
const CropSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 240c0 26.5 21.5 48 48 48l208 0 0-32-208 0c-8.8 0-16-7.2-16-16l0-352zM384 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0 0-240c0-26.5-21.5-48-48-48L160 96l0 32 208 0c8.8 0 16 7.2 16 16l0 352z" />
    </Icon>
);

export default CropSimple;