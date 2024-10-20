
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-slash?s=sharp-duotone-solid image-slash}
 * @preview ![image-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/image-slash.svg)
 */
const ImageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 146.4L64 480l423.4 0-81.2-64-113.3 0L280 416l-32 0-24 0-72 0-24 0 0-24 0-8 0-9.3 6.2-6.9 80-88 8-8.8L64 146.4zM70.5 32l87.1 67.6c5.7-2.3 11.8-3.6 18.3-3.6c26.5 0 48 21.5 48 48c0 2.3-.2 4.6-.5 6.8c34.6 26.9 69.3 53.8 103.9 80.7l21-29.4L368 174.7l19.5 27.3 120 168 1.9 2.7c22.2 17.2 44.4 34.4 66.5 51.7L576 32 70.5 32z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default ImageSlash;