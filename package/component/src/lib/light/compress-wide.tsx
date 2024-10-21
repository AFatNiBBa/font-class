
import { Icon } from "../../index";

/**
 * A component that renders the `compress-wide` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compress-wide?s=light compress-wide}
 * @preview ![compress-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/compress-wide.svg)
 */
const CompressWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 128c0 8.8-7.2 16-16 16L16 224c-8.8 0-16-7.2-16-16s7.2-16 16-16l112 0 0-112zm16 208c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112L16 320c-8.8 0-16-7.2-16-16s7.2-16 16-16l128 0zM352 80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 112 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16l0-128zM496 288c8.8 0 16 7.2 16 16s-7.2 16-16 16l-112 0 0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16l128 0z" />
    </Icon>
);

export default CompressWide;