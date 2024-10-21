
import { Icon } from "../../index";

/**
 * A component that renders the `up-to-dotted-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-dotted-line?s=sharp-solid up-to-dotted-line}
 * @preview ![up-to-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up-to-dotted-line.svg)
 */
const UpToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32l0 64L0 96 0 32l64 0zm96 0l0 64L96 96l0-64 64 0zm32 0l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64zM64 288L224 128 384 288l0 32-96 0 0 160-128 0 0-160-96 0 0-32z" />
    </Icon>
);

export default UpToDottedLine;