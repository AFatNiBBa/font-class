
import { Icon } from "../../index";

/**
 * A component that renders the `compress-wide` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compress-wide?s=regular compress-wide}
 * @preview ![compress-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/compress-wide.svg)
 */
const CompressWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 88-88 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-112zM24 288c-13.3 0-24 10.7-24 24s10.7 24 24 24l88 0 0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24L24 288zM400 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0 0-88zM376 288c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-88 88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z" />
    </Icon>
);

export default CompressWide;