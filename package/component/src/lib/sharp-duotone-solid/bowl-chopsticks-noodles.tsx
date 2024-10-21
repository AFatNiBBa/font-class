
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-chopsticks-noodles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-chopsticks-noodles?s=sharp-duotone-solid bowl-chopsticks-noodles}
 * @preview ![bowl-chopsticks-noodles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bowl-chopsticks-noodles.svg)
 */
const BowlChopsticksNoodles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l0 32 64-10 0-34L0 96zm0 48l0 32 64 0 0-34L0 144zM224 54l0 39L512 48l0-48L224 54zm0 83l0 39 288 0 0-48-288 9z" />
        <path d="M192 40l0-24-48 0 0 24 0 184-32 0 0-168 0-24L64 32l0 24 0 168L0 224l3.6 61.2C8.5 368.1 58 438.2 128 472.9l0 39.1 256 0 0-39.1c70-34.6 119.5-104.8 124.4-187.7L512 224l-320 0 0-184z" />
    </Icon>
);

export default BowlChopsticksNoodles;