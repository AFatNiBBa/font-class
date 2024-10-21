
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-person-return` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-person-return?s=sharp-duotone-solid house-person-return}
 * @preview ![house-person-return](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-person-return.svg)
 */
const HousePersonReturn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 216l0 48 64 0 0 160 275.8 0 17.5-64.3 2-7.5 5.2-5.7 14.7-16.1-13.7 6.8-28.6 14.3-14.3-28.6-28.6-57.2-14.3-28.6 28.6-14.3 28.9-14.5 37.5-74.9 3-6L240 8 0 216zm144-24l96 0 0 96-96 0 0-96z" />
        <path d="M480 48a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm17.7 80.6l10-2 9.3 4.1 72 32 12.9 5.7 4.5 13.4 16 48 10.1 30.4-60.7 20.2-10.1-30.4-11.5-34.6-36.7-16.3 17 63.6c5.6 21.1 .1 43.6-14.7 59.7l-70.9 77.4-22 80.5-8.4 30.9-61.7-16.8 8.4-30.9 24-88 2-7.5 5.2-5.7 52.3-57-18.4-62.4-13.7 27.4-4.8 9.5-9.5 4.8-48 24-28.6-57.2 38.5-19.2 35.2-70.5 7-14 15.3-3.1 80-16zM571.3 398l43.4 43.4L637.3 464 592 509.3l-22.6-22.6-48-48-4.6-4.6-2.4-6.1-15.7-39.3 40.7-44.4c2.5-2.7 4.8-5.6 7-8.6l25 62.4z" />
    </Icon>
);

export default HousePersonReturn;