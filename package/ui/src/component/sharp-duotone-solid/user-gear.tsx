
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-gear` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-gear?s=sharp-duotone-solid user-gear}
 * @preview ![user-gear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-gear.svg)
 */
const UserGear: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l404 0 0-27.7-37.1 21.4-77-133.2L326 351.7l-36.1-20.8L305.4 304 64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
        <path d="M524.1 206.4l-88.1 0 0 42.2c-8 3.4-15.6 7.8-22.5 12.9l-34.9-20.2-44.9 77.8 34.9 20.2c-.4 4.1-.7 8.2-.7 12.4s.2 8.3 .7 12.4l-34.9 20.1 45 77.8 34.9-20.1c6.9 5.1 14.5 9.4 22.5 12.9l0 42.2 88.1 0 0-42.4c7.9-3.4 15.4-7.7 22.3-12.8l35 20.2 45-77.8L591.2 364c.4-4 .7-8.1 .7-12.3s-.2-8.2-.7-12.3l35.2-20.3-45-77.8-35 20.2c-6.9-5.1-14.3-9.4-22.3-12.8l0-42.4zM480 303.7a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default UserGear;