
import { Icon, generic } from "../../index";

/**
 * A component that renders the `record-vinyl` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/record-vinyl?s=duotone record-vinyl}
 * @preview ![record-vinyl](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/record-vinyl.svg)
 */
const RecordVinyl: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
    </Icon>
);

export default RecordVinyl;