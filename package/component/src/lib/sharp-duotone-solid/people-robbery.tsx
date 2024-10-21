
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-robbery` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-robbery?s=sharp-duotone-solid people-robbery}
 * @preview ![people-robbery](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/people-robbery.svg)
 */
const PeopleRobbery: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M232.8 17.3l8.2 30.9 32 120 6.3 23.8 24.6 0 24 0 0 288 0 32 64 0 0-32 0-128 16 0 0 128 0 32 64 0 0-32 0-288 24 0 24.6 0 6.3-23.8 32-120 8.2-30.9L505.3 .8l-8.2 30.9L471.4 128 408 128c-5.3 0-10.7 0-16 0c-21.1 0-42.3 0-63.4 0L302.9 31.8 294.7 .8 232.8 17.3zM352 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M32 48a48 48 0 1 1 96 0A48 48 0 1 1 32 48zM8 128l32 0 91.1 0 17.6 0 9.4 14.9L209.6 224l30.4 0 32 0 0 64-32 0-48 0-17.6 0L165 273.1l-13-20.5L152 480l0 32-64 0 0-32 0-128-16 0 0 128 0 32L8 512l0-32L8 320s0 0 0 0l0-32L8 160l0-32z" />
    </Icon>
);

export default PeopleRobbery;