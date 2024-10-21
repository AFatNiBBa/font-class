
import { Icon } from "../../index";

/**
 * A component that renders the `circle-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=sharp-solid circle-user}
 * @preview ![circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-user.svg)
 */
const CircleUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M391.9 391.6L368 320l-224 0-23.9 71.6C154.9 426.5 202.9 448 256 448s101.1-21.5 135.9-56.4zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
    </Icon>
);

export default CircleUser;