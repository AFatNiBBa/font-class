
import { Icon } from "../../index";

/**
 * A component that renders the `box-tissue` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-tissue?s=sharp-solid box-tissue}
 * @preview ![box-tissue](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/box-tissue.svg)
 */
const BoxTissue: typeof Icon = x => (
    <Icon {...x}>
        <path d="M113.8 224L64 0 208 0c40 0 52 24 64 48s24 48 64 48l112 0L405.3 224 384 288l-256 0-14.2-64zM95.2 288L64 288l0 32 38.3 0 25.7 0 256 0 23.1 0 40.9 0 0-32-30.3 0 21.3-64 72.9 0 0 160L0 384 0 224l81 0 14.2 64zM0 416l512 0 0 96L0 512l0-96z" />
    </Icon>
);

export default BoxTissue;