
import { Icon } from "../../index";

/**
 * A component that renders the `battery-exclamation` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-exclamation?s=light battery-exclamation}
 * @preview ![battery-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/battery-exclamation.svg)
 */
const BatteryExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M208 96L80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l136.6 0c-5.4-9.4-8.6-20.3-8.6-32L80 384c-26.5 0-48-21.5-48-48l0-160c0-26.5 21.5-48 48-48l128 0 0-32zM432 416c44.2 0 80-35.8 80-80l0-160c0-44.2-35.8-80-80-80l-96 0 0 32 96 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-96 0c0 11.7-3.1 22.6-8.6 32L432 416zM576 208c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96zM272 96c-8.8 0-16 7.2-16 16l0 184c0 8.8 7.2 16 16 16s16-7.2 16-16l0-184c0-8.8-7.2-16-16-16zm24 280a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default BatteryExclamation;