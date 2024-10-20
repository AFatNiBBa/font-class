
import { Icon } from "../../index";

/**
 * A component that renders the `plane-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-up?s=sharp-solid plane-up}
 * @preview ![plane-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/plane-up.svg)
 */
const PlaneUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 93.7C192 59.5 221 0 256 0c36 0 64 59.5 64 93.7l0 66.3L512 288l0 96L320 320l0 80 64 48 0 64L256 480 128 512l0-64 64-48 0-80L0 384l0-96L192 160l0-66.3z" />
    </Icon>
);

export default PlaneUp;