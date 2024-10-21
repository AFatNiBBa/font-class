
import { Icon } from "../../index";

/**
 * A component that renders the `down-from-dotted-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-dotted-line?s=sharp-solid down-from-dotted-line}
 * @preview ![down-from-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/down-from-dotted-line.svg)
 */
const DownFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 320L224 480 384 320l0-32-96 0 0-160-128 0 0 160-96 0 0 32zM64 96l0-64L0 32 0 96l64 0zm96 0l0-64L96 32l0 64 64 0zm32-64l0 64 64 0 0-64-64 0zM352 96l0-64-64 0 0 64 64 0zm32 0l64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default DownFromDottedLine;