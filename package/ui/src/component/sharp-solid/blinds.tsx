
import { Icon } from "../../index";

/**
 * A component that renders the `blinds` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds?s=sharp-solid blinds}
 * @preview ![blinds](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/blinds.svg)
 */
const Blinds: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0L0 0 0 64l16 0L0 128l128 0 0-64 32 0 0 64 352 0L496 64l16 0 0-64L480 0 32 0zM24 160L0 256l98.7 0c4.8-13.6 15.6-24.4 29.3-29.3l0-66.7L24 160zM144 320c-20.9 0-38.7-13.4-45.3-32L24 288 0 384l512 0-24-96-298.7 0c-6.6 18.6-24.4 32-45.3 32zm16-93.3c13.6 4.8 24.4 15.6 29.3 29.3L512 256l-24-96-328 0 0 66.7zM0 512l512 0-24-96L24 416 0 512z" />
    </Icon>
);

export default Blinds;