
import { Icon } from "../../index";

/**
 * A component that renders the `up-to-dotted-line` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-dotted-line?s=sharp-regular up-to-dotted-line}
 * @preview ![up-to-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/up-to-dotted-line.svg)
 */
const UpToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32l0 64L0 96 0 32l64 0zm96 0l0 64L96 96l0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zM256 352l0-48 48 0 28.1 0L224 195.9 115.9 304l28.1 0 48 0 0 48 0 80 64 0 0-80zm1.9-190.1L384 288l0 16 0 48-32 0-16 0-32 0 0 48 0 32 0 48-48 0-64 0-48 0 0-48 0-32 0-48-32 0-16 0-32 0 0-48 0-16L190.1 161.9 224 128l33.9 33.9z" />
    </Icon>
);

export default UpToDottedLine;