
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-user?s=sharp-duotone-solid square-user}
 * @preview ![square-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-user.svg)
 */
const SquareUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l64 0 320 0 64 0 0 64 0 320 0 64-64 0L64 480 0 480l0-64L0 96 0 32zM80 416l288 0-32-96-224 0L80 416zm72-216a72 72 0 1 0 144 0 72 72 0 1 0 -144 0z" />
        <path d="M224 128a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM80 416l32-96 224 0 32 96L80 416z" />
    </Icon>
);

export default SquareUser;