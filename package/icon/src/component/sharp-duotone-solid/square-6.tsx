
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-6` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-6?s=sharp-duotone-solid square-6}
 * @preview ![square-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-6.svg)
 */
const Square_6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM128 288c0 53 43 96 96 96s96-43 96-96c0-49.2-37-89.8-84.7-95.3c14.8-16.2 29.6-32.3 44.4-48.4c5-5.4 9.9-10.8 14.9-16.2c-21.7 0-43.4 0-65.1 0c-22.7 24.8-45.4 49.5-68.1 74.3c-21.4 23.4-33.3 54-33.3 85.7zm144 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M161.3 202.3L229.4 128l65.1 0-14.9 16.2-44.4 48.4C283 198.2 320 238.8 320 288c0 53-43 96-96 96s-96-43-96-96c0-31.7 11.9-62.3 33.3-85.7zM176 288a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
    </Icon>
);

export default Square_6;