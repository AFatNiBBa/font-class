
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-spoon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-spoon?s=sharp-duotone-solid bowl-spoon}
 * @preview ![bowl-spoon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bowl-spoon.svg)
 */
const BowlSpoon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96c0 53 50.1 96 112 96l112 0 0-64 256 0 32 0 0-64-32 0L224 64l0-64L112 0C50.1 0 0 43 0 96z" />
        <path d="M512 224L0 224l3.6 61.2C8.5 368.1 58 438.2 128 472.9l0 39.1 256 0 0-39.1c70-34.6 119.5-104.8 124.4-187.7L512 224z" />
    </Icon>
);

export default BowlSpoon;