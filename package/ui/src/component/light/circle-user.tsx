
import { Icon } from "../../index";

/**
 * A component that renders the `circle-user` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=light circle-user}
 * @preview ![circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-user.svg)
 */
const CircleUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M412.1 416.6C398.1 361.1 347.9 320 288 320l-64 0c-59.9 0-110.1 41.1-124.1 96.6C58 375.9 32 319 32 256C32 132.3 132.3 32 256 32s224 100.3 224 224c0 63-26 119.9-67.9 160.6zm-28.5 23.4C347.5 465.2 303.5 480 256 480s-91.5-14.8-127.7-39.9c4-49.3 45.3-88.1 95.7-88.1l64 0c50.4 0 91.6 38.8 95.7 88.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-256a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm-80-48a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
    </Icon>
);

export default CircleUser;