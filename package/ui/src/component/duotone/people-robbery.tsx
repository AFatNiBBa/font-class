
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-robbery` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-robbery?s=duotone people-robbery}
 * @preview ![people-robbery](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/people-robbery.svg)
 */
const PeopleRobbery: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M241 39.8l8.7 34.9c11 44 40.2 79.6 78.3 99.6L328 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-305.7c38.1-20 67.3-55.6 78.3-99.6L559 39.8c.7-2.6 1-5.2 1-7.8c0-14.3-9.7-27.4-24.2-31C518.6-3.3 501.2 7.1 497 24.2l-8.7 34.9C478.1 99.6 441.7 128 400 128s-78.1-28.4-88.2-68.9L303 24.2C298.8 7.1 281.4-3.3 264.2 1S236.7 22.6 241 39.8zM352 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M32 48a48 48 0 1 1 96 0A48 48 0 1 1 32 48zM8 192c0-35.3 28.7-64 64-64l32.7 0c27.4 0 52.9 14 67.5 37.1L209.6 224l30.4 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0c-11 0-21.1-5.6-27-14.9l-13-20.5L152 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0 0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32L8 288.6l0-.6 0-96z" />
    </Icon>
);

export default PeopleRobbery;