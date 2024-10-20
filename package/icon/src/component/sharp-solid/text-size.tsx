
import { Icon } from "../../index";

/**
 * A component that renders the `text-size` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-size?s=sharp-solid text-size}
 * @preview ![text-size](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/text-size.svg)
 */
const TextSize: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32L0 32 0 64l0 64 0 32 64 0 0-32 0-32 96 0 0 320-32 0-32 0 0 64 32 0 128 0 32 0 0-64-32 0-32 0 0-320 96 0 0 32 0 32 64 0 0-32 0-64 0-32-32 0L224 32l-64 0L32 32zM352 224l-32 0 0 32 0 32 0 32 64 0 0-32 64 0 0 128-16 0-32 0 0 64 32 0 96 0 32 0 0-64-32 0-16 0 0-128 64 0 0 32 64 0 0-32 0-32 0-32-32 0-256 0z" />
    </Icon>
);

export default TextSize;