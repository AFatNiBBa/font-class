
import { Icon } from "../../index";

/**
 * A component that renders the `up-to-dotted-line` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-dotted-line?s=solid up-to-dotted-line}
 * @preview ![up-to-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/up-to-dotted-line.svg)
 */
const UpToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64A32 32 0 1 1 0 64a32 32 0 1 1 64 0zm64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM256 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm96 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM73.9 262.1L196.7 139.3c7.2-7.2 17.1-11.3 27.3-11.3s20.1 4.1 27.3 11.3L374.1 262.1c6.4 6.4 9.9 15 9.9 24c0 18.7-15.2 33.9-33.9 33.9L288 320l0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128-62.1 0C79.2 320 64 304.8 64 286.1c0-9 3.6-17.6 9.9-24z" />
    </Icon>
);

export default UpToDottedLine;