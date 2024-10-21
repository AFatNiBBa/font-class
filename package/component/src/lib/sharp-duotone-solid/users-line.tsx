
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-line?s=sharp-duotone-solid users-line}
 * @preview ![users-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/users-line.svg)
 */
const UsersLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 288l135.4 0 28.2-75.2 7.8-20.8L64 192 32 288zM83.2 96a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm94.4 256l288 0-24-64-24-64-12.3 0-170.7 0-9.1 0-24 64-24 64zm64-240a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zM435.2 96a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm4.6 96l7.8 20.8L475.8 288 608 288l-32-96-136.2 0z" />
        <path d="M0 416l32 0 576 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
    </Icon>
);

export default UsersLine;