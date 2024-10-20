
import { Icon } from "../../index";

/**
 * A component that renders the `text-width` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-width?s=sharp-solid text-width}
 * @preview ![text-width](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/text-width.svg)
 */
const TextWidth: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32L0 32 0 64l0 64 0 32 64 0 0-32 0-32 128 0 0 128-32 0 0 64 32 0 64 0 32 0 0-64-32 0 0-128 128 0 0 32 0 32 64 0 0-32 0-64 0-32-32 0L224 32 32 32zM0 384l96 96 32 0 0-64 192 0 0 64 32 0 96-96-96-96-32 0 0 64-192 0 0-64-32 0L0 384z" />
    </Icon>
);

export default TextWidth;