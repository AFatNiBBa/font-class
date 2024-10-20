
import { Icon } from "../../index";

/**
 * A component that renders the `compress-wide` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compress-wide?s=sharp-light compress-wide}
 * @preview ![compress-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/compress-wide.svg)
 */
const CompressWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 80l0-16 32 0 0 16 0 128 0 16-16 0L16 224 0 224l0-32 16 0 112 0 0-112zm16 208l16 0 0 16 0 128 0 16-32 0 0-16 0-112L16 320 0 320l0-32 16 0 128 0zM352 80l0-16 32 0 0 16 0 112 112 0 16 0 0 32-16 0-128 0-16 0 0-16 0-128zM496 288l16 0 0 32-16 0-112 0 0 112 0 16-32 0 0-16 0-128 0-16 16 0 128 0z" />
    </Icon>
);

export default CompressWide;