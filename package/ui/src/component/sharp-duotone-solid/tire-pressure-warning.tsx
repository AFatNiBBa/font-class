
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tire-pressure-warning` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tire-pressure-warning?s=sharp-duotone-solid tire-pressure-warning}
 * @preview ![tire-pressure-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tire-pressure-warning.svg)
 */
const TirePressureWarning: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M3.2 313.3C8.6 361.9 31.3 412.3 80 462l0 50 64 0 0-24 32 0 0 24 64 0 0-24 32 0 0 24 64 0 0-24 32 0 0 24 64 0 0-50c48.7-49.7 71.4-100.1 76.8-148.7c5.9-53.6-9.9-100.6-27.5-136.2c-7.8-15.8-14.5-30-19.3-44.4l-2.5-7.4C451.9 102.5 448 78.5 448 54.5L448 32l0-32L384 0l0 32 0 22.5c0 31 5 61.7 14.8 91.1l2.5 7.4c6.3 19 14.8 36.6 22.6 52.5c14.7 29.7 25.3 64 21.3 100.9c-3.7 34-20.4 74.1-65.7 117.7l-246.8 0c-45.3-43.6-62-83.7-65.7-117.7c-4.1-36.9 6.6-71.1 21.3-100.9c7.8-15.8 16.3-33.5 22.6-52.5l2.5-7.4C123 116.2 128 85.4 128 54.5L128 32l0-32L64 0l0 32 0 22.5c0 24.1-3.9 48-11.5 70.8L50 132.7c-4.8 14.4-11.5 28.6-19.3 44.4C13.2 212.7-2.7 259.7 3.2 313.3z" />
        <path d="M280 120l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm0 168l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default TirePressureWarning;