
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=sharp-duotone-solid circle-user}
 * @preview ![circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-user.svg)
 */
const CircleUser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM120.1 391.6L144 320l224 0 23.9 71.6C357.1 426.5 309.1 448 256 448s-101.1-21.5-135.9-56.4zM328 200a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
        <path d="M256 448c53.1 0 101.1-21.5 135.9-56.4L368 320l-224 0-23.9 71.6C154.9 426.5 202.9 448 256 448zm0-176a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
    </Icon>
);

export default CircleUser;