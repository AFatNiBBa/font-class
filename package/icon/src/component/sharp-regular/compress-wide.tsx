
import { Icon } from "../../index";

/**
 * A component that renders the `compress-wide` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compress-wide?s=sharp-regular compress-wide}
 * @preview ![compress-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/compress-wide.svg)
 */
const CompressWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 88l0-24-48 0 0 24 0 88-88 0L0 176l0 48 24 0 112 0 24 0 0-24 0-112zM24 288L0 288l0 48 24 0 88 0 0 88 0 24 48 0 0-24 0-112 0-24-24 0L24 288zM400 88l0-24-48 0 0 24 0 112 0 24 24 0 112 0 24 0 0-48-24 0-88 0 0-88zM376 288l-24 0 0 24 0 112 0 24 48 0 0-24 0-88 88 0 24 0 0-48-24 0-112 0z" />
    </Icon>
);

export default CompressWide;