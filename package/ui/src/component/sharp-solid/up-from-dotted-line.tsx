
import { Icon } from "../../index";

/**
 * A component that renders the `up-from-dotted-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-dotted-line?s=sharp-solid up-from-dotted-line}
 * @preview ![up-from-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up-from-dotted-line.svg)
 */
const UpFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 192L224 32 384 192l0 32-96 0 0 160-128 0 0-160-96 0 0-32zm0 224l0 64L0 480l0-64 64 0zm96 0l0 64-64 0 0-64 64 0zm32 64l0-64 64 0 0 64-64 0zm160-64l0 64-64 0 0-64 64 0zm32 0l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default UpFromDottedLine;