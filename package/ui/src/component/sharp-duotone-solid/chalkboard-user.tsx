
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chalkboard-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard-user?s=sharp-duotone-solid chalkboard-user}
 * @preview ![chalkboard-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chalkboard-user.svg)
 */
const ChalkboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 0l0 32 0 64c23.3 0 45.2 6.2 64 17.1L224 64l352 0 0 288-64 0-128 0-78.6 0 19.2 64L608 416l32 0 0-32 0-352 0-32L608 0 192 0 160 0z" />
        <path d="M64 224a96 96 0 1 1 192 0A96 96 0 1 1 64 224zM272 352l48 160L0 512 48 352l224 0zm240-64l0 64-128 0 0-64 128 0z" />
    </Icon>
);

export default ChalkboardUser;