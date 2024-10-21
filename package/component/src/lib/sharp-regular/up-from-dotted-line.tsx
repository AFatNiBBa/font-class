
import { Icon } from "../../index";

/**
 * A component that renders the `up-from-dotted-line` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-dotted-line?s=sharp-regular up-from-dotted-line}
 * @preview ![up-from-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/up-from-dotted-line.svg)
 */
const UpFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 256l0-48 48 0 28.1 0L224 99.9 115.9 208l28.1 0 48 0 0 48 0 80 64 0 0-80zm1.9-190.1L384 192l0 16 0 48-32 0-16 0-32 0 0 48 0 32 0 48-48 0-64 0-48 0 0-48 0-32 0-48-32 0-16 0-32 0 0-48 0-16L190.1 65.9 224 32l33.9 33.9zM64 416l0 64L0 480l0-64 64 0zm96 0l0 64-64 0 0-64 64 0zm32 64l0-64 64 0 0 64-64 0zm160-64l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default UpFromDottedLine;