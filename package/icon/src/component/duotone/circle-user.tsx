
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=duotone circle-user}
 * @preview ![circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-user.svg)
 */
const CircleUser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM113 384.2c22.1-38.3 63.5-64.2 111-64.2l64 0c47.4 0 88.9 25.8 111 64.2C363.8 423.3 312.8 448 256 448s-107.8-24.7-143-63.8zM328 200a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
        <path d="M256 272a72 72 0 1 0 0-144 72 72 0 1 0 0 144zm0 176c56.8 0 107.8-24.7 143-63.8C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8z" />
    </Icon>
);

export default CircleUser;