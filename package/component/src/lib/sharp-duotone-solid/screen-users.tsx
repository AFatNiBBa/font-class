
import { Icon, generic } from "../../index";

/**
 * A component that renders the `screen-users` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screen-users?s=sharp-duotone-solid screen-users}
 * @preview ![screen-users](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/screen-users.svg)
 */
const ScreenUsers: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 0L64 0 576 0l32 0 0 32 0 216.4c-17-15.2-39.4-24.4-64-24.4l0-160L96 64l0 160c-24.6 0-47 9.2-64 24.4L32 32 32 0z" />
        <path d="M96 384a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm224 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm288-64a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM416 512l-32-96-128 0-32 96 192 0zM32 416L0 512l192 0-32-96L32 416zm608 96l-32-96-128 0-32 96 192 0z" />
    </Icon>
);

export default ScreenUsers;