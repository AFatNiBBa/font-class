
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-snowmobiling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-snowmobiling?s=sharp-duotone-solid person-snowmobiling}
 * @preview ![person-snowmobiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-snowmobiling.svg)
 */
const PersonSnowmobiling: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 464c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L48 416c-26.5 0-48 21.5-48 48zM106.7 220.6c-11.4 21.6-9.4 47.8 5.3 67.4l152 0-72-32 32-48 48 48 40 0 48-64-56 0-80-72-64 0L106.7 220.6zM192 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM416 464l0 48 24 0 128 0 9.9 0 7-7 32-32 17-17L600 422.1l-17 17-25 25L546 464l-46-61.3L480 416l-30 0 36 48-46 0-24 0z" />
        <path d="M373.5 85.3L362.7 63.8 319.8 85.3l10.7 21.5 37.4 74.7L288 288 80 288 31.1 385.8c5.4-1.2 11.1-1.8 16.9-1.8l224 0c26.2 0 49.4 12.6 64 32l144 0 96-64 0-96L419.8 177.9 373.5 85.3z" />
    </Icon>
);

export default PersonSnowmobiling;