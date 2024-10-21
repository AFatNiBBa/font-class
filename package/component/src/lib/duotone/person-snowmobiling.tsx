
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-snowmobiling` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-snowmobiling?s=duotone person-snowmobiling}
 * @preview ![person-snowmobiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-snowmobiling.svg)
 */
const PersonSnowmobiling: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 464c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L48 416c-26.5 0-48 21.5-48 48zM106.7 220.6c-11.4 21.6-9.4 47.8 5.3 67.4l152 0-72-32 32-48 29.3 29.3c12 12 28.3 18.7 45.3 18.7l13.5 0 48-64-56 0-61.7-55.6c-11.8-10.6-27-16.4-42.8-16.4l-.9 0c-23.7 0-45.5 13.1-56.6 34.1l-35.3 66.6zM192 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM416 488c0 13.3 10.7 24 24 24l136 0c6.4 0 12.5-2.5 17-7l40-40c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17c-9.4-9.4-24.6-9.4-33.9 0l-33 33L546 464l-46-61.3L480 416l-30 0 36 48-46 0c-13.3 0-24 10.7-24 24z" />
        <path d="M373.5 85.3c-5.9-11.9-20.3-16.7-32.2-10.7s-16.7 20.3-10.7 32.2l37.4 74.7L288 288 99.8 288c-12.1 0-23.2 6.8-28.6 17.7l-32 64c-2.5 5-3.6 10.2-3.4 15.2c4-.6 8.1-.9 12.3-.9l224 0c26.2 0 49.4 12.6 64 32l144 0 88.9-59.3c4.5-3 7.1-8 7.1-13.3l0-77.5c0-6.1-3.4-11.6-8.8-14.3L419.8 177.9 373.5 85.3z" />
    </Icon>
);

export default PersonSnowmobiling;