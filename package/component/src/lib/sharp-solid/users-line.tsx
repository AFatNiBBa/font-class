
import { Icon } from "../../index";

/**
 * A component that renders the `users-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-line?s=sharp-solid users-line}
 * @preview ![users-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/users-line.svg)
 */
const UsersLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM64 192L32 288l135.4 0 28.2-75.2 7.8-20.8L64 192zm411.8 96L608 288l-32-96-136.2 0 7.8 20.8L475.8 288zm-10.2 64l-24-64-24-64-12.3 0-170.7 0-9.1 0-24 64-24 64 288 0zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416L0 416l0 64 32 0 576 0 32 0 0-64-32 0L32 416z" />
    </Icon>
);

export default UsersLine;