
import { Icon } from "../../index";

/**
 * A component that renders the `text-size` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-size?s=light text-size}
 * @preview ![text-size](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/text-size.svg)
 */
const TextSize: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32C14.3 32 0 46.3 0 64l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64 144 0 0 384-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0 0-384 144 0 0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-17.7-14.3-32-32-32L32 32zM352 224c-17.7 0-32 14.3-32 32l0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 112 0 0 192-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-192 112 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32c0-17.7-14.3-32-32-32l-128 0-128 0z" />
    </Icon>
);

export default TextSize;