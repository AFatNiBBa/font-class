
import { Icon } from "../../index";

/**
 * A component that renders the `user-gear` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-gear?s=sharp-regular user-gear}
 * @preview ![user-gear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-gear.svg)
 */
const UserGear: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM65 464l277.8 0 24.1 41.7L404 484.3l0 27.7-6.2 0L50.2 512 0 512l14.8-48L64 304l241.4 0-15.5 26.9L326 351.7l-.5 .3-226 0L65 464zM436 206.4l88.1 0 0 42.4c7.9 3.4 15.4 7.7 22.3 12.8l35-20.2 45 77.8-35.2 20.3c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l35.2 20.3-45 77.8-35.1-20.2c-6.9 5.1-14.3 9.4-22.3 12.8l0 42.4L436 497l0-42.2c-8-3.4-15.6-7.7-22.5-12.9l-34.9 20.1-45-77.8 34.9-20.1c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4l-34.9-20.2 44.9-77.8 34.9 20.2c6.9-5.1 14.5-9.4 22.5-12.9l0-42.2zm92.1 145.3a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z" />
    </Icon>
);

export default UserGear;