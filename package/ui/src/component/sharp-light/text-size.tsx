
import { Icon } from "../../index";

/**
 * A component that renders the `text-size` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-size?s=sharp-light text-size}
 * @preview ![text-size](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/text-size.svg)
 */
const TextSize: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 32L0 32 0 48l0 80 0 16 32 0 0-16 0-64 144 0 0 384-64 0-16 0 0 32 16 0 160 0 16 0 0-32-16 0-64 0 0-384 144 0 0 64 0 16 32 0 0-16 0-80 0-16-16 0L16 32zM336 224l-16 0 0 16 0 48 0 16 32 0 0-16 0-32 112 0 0 192-48 0-16 0 0 32 16 0 128 0 16 0 0-32-16 0-48 0 0-192 112 0 0 32 0 16 32 0 0-16 0-48 0-16-16 0-144 0-144 0z" />
    </Icon>
);

export default TextSize;