
import { Icon } from "../../index";

/**
 * A component that renders the `circle-user` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=sharp-regular circle-user}
 * @preview ![circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-user.svg)
 */
const CircleUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256c0-114.9-93.1-208-208-208S48 141.1 48 256c0 60.2 25.6 114.5 66.5 152.5L144 320l224 0 29.5 88.5c40.9-38 66.5-92.2 66.5-152.5zM333.4 368l-154.8 0-23.3 70c29.8 16.6 64.2 26 100.7 26s70.9-9.4 100.7-26l-23.3-70zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm216-56a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm40 88a88 88 0 1 1 0-176 88 88 0 1 1 0 176z" />
    </Icon>
);

export default CircleUser;