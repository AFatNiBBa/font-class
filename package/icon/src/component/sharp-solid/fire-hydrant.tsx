
import { Icon } from "../../index";

/**
 * A component that renders the `fire-hydrant` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-hydrant?s=sharp-solid fire-hydrant}
 * @preview ![fire-hydrant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/fire-hydrant.svg)
 */
const FireHydrant: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 32l0 4c45 11.6 80.4 47 92 92l12 0 24 0 0 48-24 0L56 176l-24 0 0-48 24 0 12 0c11.6-45 47-80.4 92-92l0-4 0-32 64 0 0 32zM32 464l24 0 8 0 0-64-48 0 0-128 48 0 0-64 256 0 0 64 48 0 0 128-48 0 0 64 8 0 24 0 0 48-24 0-8 0L64 512l-8 0-24 0 0-48zm160-64a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default FireHydrant;