
import { Icon } from "../../index";

/**
 * A component that renders the `record-vinyl` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/record-vinyl?s=sharp-solid record-vinyl}
 * @preview ![record-vinyl](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/record-vinyl.svg)
 */
const RecordVinyl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default RecordVinyl;