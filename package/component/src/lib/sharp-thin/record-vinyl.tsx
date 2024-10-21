
import { Icon } from "../../index";

/**
 * A component that renders the `record-vinyl` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/record-vinyl?s=sharp-thin record-vinyl}
 * @preview ![record-vinyl](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/record-vinyl.svg)
 */
const RecordVinyl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM384 256a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM256 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 128a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default RecordVinyl;