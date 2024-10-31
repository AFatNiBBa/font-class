
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cars` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cars?s=duotone cars}
 * @preview ![cars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cars.svg)
 */
const Cars: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192l0 96c0 10.7 0 21.3 0 32c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-32 136.5 0c5.1-5.7 10.8-10.7 17.1-15.1l22.8-68.3c15.2-45.7 58-76.6 106.3-76.6l15.1 0L353.3 54.7C342.4 22 311.8 0 277.4 0L138.6 0c-34.4 0-65 22-75.9 54.7L36.1 134.4C14.8 144.7 0 166.6 0 192zm104 16a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm1.7-80l17.7-53.1c2.2-6.5 8.3-10.9 15.2-10.9l138.8 0c6.9 0 13 4.4 15.2 10.9L310.3 128l-204.5 0z" />
        <path d="M347.4 234.9L329.7 288l204.5 0-17.7-53.1c-2.2-6.5-8.3-10.9-15.2-10.9l-138.8 0c-6.9 0-13 4.4-15.2 10.9zm-87.3 59.4l26.6-79.7C297.6 182 328.2 160 362.6 160l138.8 0c34.4 0 65 22 75.9 54.7l26.6 79.7C625.2 304.7 640 326.6 640 352l0 96s0 0 0 0l0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32-256 0 0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32s0 0 0 0l0-96c0-25.4 14.8-47.3 36.1-57.6zM328 368a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm232 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Cars;