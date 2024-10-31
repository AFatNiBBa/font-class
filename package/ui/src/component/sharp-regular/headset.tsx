
import { Icon } from "../../index";

/**
 * A component that renders the `headset` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headset?s=sharp-regular headset}
 * @preview ![headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/headset.svg)
 */
const Headset: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256C48 141.1 141.1 48 256 48s208 93.1 208 208l0 184.1L320 440l0-24-80 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l80 0 0-24 168 .1 24 0 0-24L512 256C512 114.6 397.4 0 256 0S0 114.6 0 256l0 40 0 24 48 0 0-24 0-40zm70.1-80l-7 7L87 207l-7 7 0 9.9 0 56 0 80 0 24 24 0 80 0 24 0 0-24 0-160 0-24-24 0-56 0-9.9 0zm9.9 57.9l9.9-9.9 22.1 0 0 112-32 0 0-56 0-46.1zM384 176l-56 0-24 0 0 24 0 160 0 24 24 0 80 0 24 0 0-24 0-80 0-56 0-9.9-7-7-24-24-7-7-9.9 0zm-9.9 48l9.9 9.9 0 46.1 0 56-32 0 0-112 22.1 0z" />
    </Icon>
);

export default Headset;