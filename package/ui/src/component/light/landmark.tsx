
import { Icon } from "../../index";

/**
 * A component that renders the `landmark` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark?s=light landmark}
 * @preview ![landmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/landmark.svg)
 */
const Landmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M263.9 2.1C259-.7 253-.7 248.1 2.1L15.8 133.7C6 139.3 0 149.6 0 160.8C0 178 14 192 31.2 192l449.7 0c17.2 0 31.2-14 31.2-31.2c0-11.2-6-21.6-15.8-27.1L263.9 2.1zM256 34.4L477.7 160 34.3 160 256 34.4zM64 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l384 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l0-128-32 0 0 128-80 0 0-128-32 0 0 128-96 0 0-128-32 0 0 128-80 0 0-128-32 0 0 128zM24 432c0 8.8 7.2 16 16 16l432 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L40 416c-8.8 0-16 7.2-16 16zM0 496c0 8.8 7.2 16 16 16l480 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 480c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default Landmark;