
import { Icon, generic } from "../../index";

/**
 * A component that renders the `headset` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headset?s=sharp-duotone-solid headset}
 * @preview ![headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/headset.svg)
 */
const Headset: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256l0 40 0 24 48 0 0-24 0-40C48 141.1 141.1 48 256 48s208 93.1 208 208l0 184.1L320 440l0-24-80 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l80 0 0-24 168 .1 24 0 0-24L512 256C512 114.6 397.4 0 256 0S0 114.6 0 256z" />
        <path d="M192 224L80 224l0 160 112 0 0-160zm240 0l-112 0 0 160 112 0 0-160z" />
    </Icon>
);

export default Headset;