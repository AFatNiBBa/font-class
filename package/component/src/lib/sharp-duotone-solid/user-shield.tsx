
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-shield` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shield?s=sharp-duotone-solid user-shield}
 * @preview ![user-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-shield.svg)
 */
const UserShield: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l426.1 0c-69.3-49.5-103.7-133.3-106-208L64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
        <path d="M496 275.5l0 184.9c56.5-26.3 90.2-87 95.3-148L496 275.5zM640 296c0 85.8-48 184-144 216c-96-32-144-130.2-144-216l0-16.2L496 224l144 55.8 0 16.2z" />
    </Icon>
);

export default UserShield;