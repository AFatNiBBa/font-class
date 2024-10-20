
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-dotted-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-dotted-line?s=sharp-solid down-to-dotted-line}
 * @preview ![down-to-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/down-to-dotted-line.svg)
 */
const DownToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 480l0-64L0 416l0 64 64 0zm96 0l0-64-64 0 0 64 64 0zm32 0l64 0 0-64-64 0 0 64zm160 0l0-64-64 0 0 64 64 0zm32 0l64 0 0-64-64 0 0 64zM64 224L224 384 384 224l0-32-96 0 0-160L160 32l0 160-96 0 0 32z" />
    </Icon>
);

export default DownToDottedLine;