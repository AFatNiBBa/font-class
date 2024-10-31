
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users-gear` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-gear?s=sharp-duotone-solid users-gear}
 * @preview ![users-gear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/users-gear.svg)
 */
const UsersGear: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 320l235.3 0c-26.6-23.5-43.3-57.8-43.3-96c0-11 1.4-21.8 4-32L48 192 0 320zM64 80a80 80 0 1 0 160 0A80 80 0 1 0 64 80zm64 432l273.1 0-11.7-20.3-32-55.4-16-27.7 27.7-16L384 384l-14.9-8.6-27.7-16 4.3-7.4L176 352 128 512zm96-288c0 53 43 96 96 96c19.9 0 38.3-6 53.7-16.4l15.8-27.3 16-27.7 6.3 3.7c2.7-8.9 4.2-18.4 4.2-28.2c0-53-43-96-96-96s-96 43-96 96zM432 80a80 80 0 1 0 160 0A80 80 0 1 0 432 80zm12 112c2.6 10.2 4 21 4 32l32 0 64 0 32 0 0 32 0 17.1c5-2.8 9.9-5.7 14.9-8.6l23.3-13.5L592 192l-148 0z" />
        <path d="M480 256l64 0 0 37.5c11.2 4 21.5 10 30.4 17.6l32.5-18.7 32 55.4-32.5 18.7c1 5.7 1.6 11.6 1.6 17.6s-.6 11.9-1.6 17.5l32.5 18.7-32 55.4L574.4 457c-8.9 7.6-19.2 13.6-30.4 17.6l0 37.5-64 0 0-37.5c-11.2-4-21.5-10-30.4-17.6l-32.5 18.7-32-55.4 32.5-18.7c-1-5.7-1.6-11.6-1.6-17.5s.6-11.9 1.6-17.6l-32.5-18.7 32-55.4L449.6 311c8.9-7.6 19.1-13.6 30.4-17.6l0-37.5zm32 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default UsersGear;