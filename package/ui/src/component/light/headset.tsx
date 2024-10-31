
import { Icon } from "../../index";

/**
 * A component that renders the `headset` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headset?s=light headset}
 * @preview ![headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/headset.svg)
 */
const Headset: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224l0 144.1c0 26.5-21.5 48-48 48l-82.7-.1c-6.6-18.6-24.4-32-45.3-32l-64 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l64 0c20.9 0 38.7-13.4 45.3-32l82.7 .1c44.2 0 80.1-35.8 80.1-80L512 256C512 114.6 397.4 0 256 0S0 114.6 0 256l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48zM320 464c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0c8.8 0 16 7.2 16 16zM144 224l16 0 0 128-16 0c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48zM64 272l0 32c0 44.2 35.8 80 80 80l16 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-16 0c-44.2 0-80 35.8-80 80zm288-48l16 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48l-16 0 0-128zm16-32l-16 0c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l16 0c44.2 0 80-35.8 80-80l0-32c0-44.2-35.8-80-80-80z" />
    </Icon>
);

export default Headset;