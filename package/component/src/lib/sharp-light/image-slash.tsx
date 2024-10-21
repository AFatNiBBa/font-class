
import { Icon } from "../../index";

/**
 * A component that renders the `image-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-slash?s=sharp-light image-slash}
 * @preview ![image-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/image-slash.svg)
 */
const ImageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32.4 10L19.9 .1 .1 25.3l12.6 9.9L607.8 502.2l12.6 9.9 19.8-25.2-12.6-9.9L32.4 10zM576 64l0-32-32 0L139.6 32l40.5 32L544 64l0 201.4-84.7-84.7L448 169.4l-11.3 11.3-48 48 25.3 20 34-34 96 96 0 40.7 32 25.3L576 64zM297.6 319.8l-9.6 9.6-81.2-81.2-16.5-13.1-9.6 9.6L96 329.4l0-168.7L64 135.4 64 448l0 32 32 0 404.4 0-40.5-32-245.3 0L322.8 339.8l-25.3-20zM265.4 352l-96 96L96 448l0-73.4 96-96L265.4 352z" />
    </Icon>
);

export default ImageSlash;