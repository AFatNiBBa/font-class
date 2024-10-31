
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-image` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-image?s=duotone hexagon-image}
 * @preview ![hexagon-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hexagon-image.svg)
 */
const HexagonImage: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M7.4 256c0 12.4 3.2 24.9 9.6 36l88.3 152.9c12.9 22.3 36.6 36 62.4 36l176.6 0c25.7 0 49.5-13.7 62.4-36L494.9 292c6.4-11.1 9.6-23.6 9.6-36s-3.2-24.9-9.6-36L406.6 67.1c-12.9-22.3-36.6-36-62.4-36l-176.6 0c-25.7 0-49.5 13.7-62.4 36L17.1 220c-6.4 11.1-9.6 23.6-9.6 36zm99.7 79.9c17.1-18.7 34.1-37.4 51.2-56.1c4.5-4.9 10.8-7.7 17.4-7.8s13 2.6 17.6 7.4c13 13.5 25.9 27.1 38.9 40.6c23.9-28.7 47.7-57.5 71.6-86.2c4.6-5.5 11.3-8.7 18.5-8.7s13.9 3.2 18.5 8.7c24.2 29.1 48.4 58.3 72.6 87.4c-18.4 31.9-36.8 63.8-55.2 95.7c-2.9 4.9-8.1 8-13.9 8c-58.9 0-117.7 0-176.6 0c-5.7 0-11-3.1-13.9-8c-15.6-27-31.2-54-46.8-81zM232 160a40 40 0 1 1 -80 0 40 40 0 1 1 80 0z" />
        <path d="M158.3 279.8l-51.2 56.1 46.8 81c2.9 5 8.1 8 13.9 8l176.6 0c5.7 0 11-3 13.9-8l55.2-95.7-72.6-87.4c-4.6-5.5-11.3-8.7-18.5-8.7s-13.9 3.2-18.5 8.7L232.2 320l-38.9-40.6c-4.6-4.8-11-7.5-17.6-7.4s-13 2.9-17.4 7.8z" />
    </Icon>
);

export default HexagonImage;