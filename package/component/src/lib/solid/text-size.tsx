
import { Icon } from "../../index";

/**
 * A component that renders the `text-size` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-size?s=solid text-size}
 * @preview ![text-size](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/text-size.svg)
 */
const TextSize: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 128l0-32 96 0 0 320-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320 96 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-26.5-21.5-48-48-48L192 32 48 32C21.5 32 0 53.5 0 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32zM384 304l0-16 64 0 0 128-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-128 64 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-26.5-21.5-48-48-48l-224 0c-26.5 0-48 21.5-48 48l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
    </Icon>
);

export default TextSize;