
import { Icon } from "../../index";

/**
 * A component that renders the `headset` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headset?s=sharp-solid headset}
 * @preview ![headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/headset.svg)
 */
const Headset: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48C141.1 48 48 141.1 48 256l0 40 0 24L0 320l0-24 0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 208.1 0 24-24 0L320 488l0 24-80 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l80 0 0 24 144 .1L464 256c0-114.9-93.1-208-208-208zM192 224l0 160L80 384l0-160 112 0zm240 0l0 160-112 0 0-160 112 0z" />
    </Icon>
);

export default Headset;