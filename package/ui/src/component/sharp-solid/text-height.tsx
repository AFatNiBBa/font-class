
import { Icon } from "../../index";

/**
 * A component that renders the `text-height` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-height?s=sharp-solid text-height}
 * @preview ![text-height](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/text-height.svg)
 */
const TextHeight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32L0 32 0 64l0 64 0 32 64 0 0-32 0-32 64 0 0 320-32 0-32 0 0 64 32 0 128 0 32 0 0-64-32 0-32 0 0-320 64 0 0 32 0 32 64 0 0-32 0-64 0-32-32 0-96 0-64 0L32 32zm448 0l-96 96 0 32 64 0 0 192-64 0 0 32 96 96 96-96 0-32-64 0 0-192 64 0 0-32L480 32z" />
    </Icon>
);

export default TextHeight;