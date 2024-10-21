
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-star` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-star?s=duotone circle-star}
 * @preview ![circle-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-star.svg)
 */
const CircleStar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm111.4-47c1.9-5.8 6.9-10 12.9-10.9c27-3.9 54-7.9 81.1-11.8c12.1-24.5 24.2-49 36.2-73.4c2.7-5.5 8.3-8.9 14.3-8.9s11.7 3.5 14.3 8.9c12.1 24.5 24.2 49 36.2 73.4c27 3.9 54 7.9 81 11.8c6 .9 11 5.1 12.9 10.9s.3 12.2-4 16.4l-58.6 57.2 13.8 80.7c1 6-1.4 12.1-6.4 15.6c-2.8 2-6.1 3.1-9.4 3.1c-2.5 0-5.1-.6-7.4-1.8c-24.2-12.7-48.3-25.4-72.5-38.1c-24.2 12.7-48.3 25.4-72.5 38.1c-2.3 1.2-4.9 1.8-7.4 1.8c-3.3 0-6.6-1-9.4-3.1c-4.9-3.6-7.4-9.6-6.4-15.6c4.6-26.9 9.2-53.8 13.8-80.7l-58.6-57.2c-4.4-4.3-5.9-10.6-4-16.4z" />
        <path d="M270.3 112.9c-2.7-5.5-8.3-8.9-14.3-8.9s-11.7 3.5-14.3 8.9l-36.2 73.4-81.1 11.8c-6 .9-11 5.1-12.9 10.9s-.3 12.2 4 16.4l58.6 57.2-13.8 80.7c-1 6 1.4 12.1 6.4 15.6s11.5 4.1 16.9 1.2L256 342.1l72.5 38.1c5.4 2.8 11.9 2.4 16.9-1.2s7.4-9.6 6.4-15.6l-13.8-80.7 58.6-57.2c4.4-4.3 5.9-10.6 4-16.4s-6.9-10-12.9-10.9l-81-11.8-36.2-73.4z" />
    </Icon>
);

export default CircleStar;