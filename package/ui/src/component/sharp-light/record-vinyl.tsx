
import { Icon } from "../../index";

/**
 * A component that renders the `record-vinyl` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/record-vinyl?s=sharp-light record-vinyl}
 * @preview ![record-vinyl](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/record-vinyl.svg)
 */
const RecordVinyl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM384 256a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM256 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 120a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default RecordVinyl;