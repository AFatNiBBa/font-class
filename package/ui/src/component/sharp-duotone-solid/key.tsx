
import { Icon, generic } from "../../index";

/**
 * A component that renders the `key` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key?s=sharp-duotone-solid key}
 * @preview ![key](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/key.svg)
 */
const Key: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 398.1L0 408l0 80 0 24 24 0 80 0 24 0 0-24 0-40 40 0 24 0 0-24 0-40 40 0 9.9 0 7-7c11.1-11.1 22.2-22.2 33.3-33.3c-38-38-76-76-113.9-113.9C114.6 283.5 60.8 337.2 7 391l-7 7z" />
        <path d="M168.3 229.7L282.3 343.7s0 0 0 0c16.9 5.4 35 8.3 53.7 8.3c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7c0 0 0 0 0 0zM336 136a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z" />
    </Icon>
);

export default Key;