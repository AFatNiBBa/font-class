
import { Icon } from "../../index";

/**
 * A component that renders the `down-from-line` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-line?s=solid down-from-line}
 * @preview ![down-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/down-from-line.svg)
 */
const DownFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M41.9 345.9L164.7 468.7c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3L342.1 345.9c6.4-6.4 9.9-15 9.9-24c0-18.7-15.2-33.9-33.9-33.9L256 288l0-128c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 128-62.1 0C47.2 288 32 303.2 32 321.9c0 9 3.6 17.6 9.9 24zM32 96l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96z" />
    </Icon>
);

export default DownFromLine;