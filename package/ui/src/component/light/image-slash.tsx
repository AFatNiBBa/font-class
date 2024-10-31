
import { Icon } from "../../index";

/**
 * A component that renders the `image-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-slash?s=light image-slash}
 * @preview ![image-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/image-slash.svg)
 */
const ImageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM576 96c0-35.3-28.7-64-64-64L139.6 32l40.5 32L512 64c17.7 0 32 14.3 32 32l0 169.4-67.7-67.7c-15.6-15.6-40.9-15.6-56.6 0l-31 31 25.3 20 28.4-28.4c3.1-3.1 8.2-3.1 11.3 0L544 310.6l0 40.7 32 25.3L576 96zM297.6 319.8l-9.6 9.6-67.7-67.7c-15.6-15.6-40.9-15.6-56.6 0L96 329.4l0-168.7L64 135.4 64 416c0 35.3 28.7 64 64 64l372.4 0-40.5-32-245.3 0L322.8 339.8l-25.3-20zM265.4 352l-96 96L128 448c-17.7 0-32-14.3-32-32l0-41.4 90.3-90.3c3.1-3.1 8.2-3.1 11.3 0L265.4 352z" />
    </Icon>
);

export default ImageSlash;