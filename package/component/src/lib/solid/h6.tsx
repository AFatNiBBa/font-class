
import { Icon } from "../../index";

/**
 * A component that renders the `h6` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h6?s=solid h6}
 * @preview ![h6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/h6.svg)
 */
const H6: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M537 116l-35.3 44.1C578.6 163.1 640 226.4 640 304c0 79.5-64.5 144-144 144s-144-64.5-144-144c0-38.3 13-75.5 37-105.5L487 76c11-13.8 31.2-16 45-5s16 31.2 5 45zM416 304a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zM32 64c17.7 0 32 14.3 32 32l0 128 192 0 0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 160 0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128L64 288l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 256 0 96C0 78.3 14.3 64 32 64z" />
    </Icon>
);

export default H6;