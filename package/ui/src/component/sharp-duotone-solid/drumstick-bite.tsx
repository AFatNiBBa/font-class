
import { Icon, generic } from "../../index";

/**
 * A component that renders the `drumstick-bite` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drumstick-bite?s=sharp-duotone-solid drumstick-bite}
 * @preview ![drumstick-bite](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/drumstick-bite.svg)
 */
const DrumstickBite: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 380c0 33.1 26.9 60 60 60l12 0 0 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-16.2-6.4-30.9-16.8-41.7L233.5 352 208 352l-48-48 0-25.5-58.4 58.3C90.9 326.4 76.2 320 60 320c-33.1 0-60 26.9-60 60z" />
        <path d="M160 304l0-128C160 78.8 238.8 0 336 0c95.4 0 173.1 76 175.9 170.7C497.4 163.9 481.1 160 464 160c-61.9 0-112 50.1-112 112c0 28.6 10.7 54.6 28.3 74.4c-14.1 3.7-29 5.6-44.3 5.6l-128 0-48-48z" />
    </Icon>
);

export default DrumstickBite;