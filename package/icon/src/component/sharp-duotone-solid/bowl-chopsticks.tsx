
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-chopsticks` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-chopsticks?s=sharp-duotone-solid bowl-chopsticks}
 * @preview ![bowl-chopsticks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bowl-chopsticks.svg)
 */
const BowlChopsticks: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L512 0l0 48L0 128 0 96zm0 48l512-16 0 48L0 176l0-32z" />
        <path d="M512 224L0 224l3.6 61.2C8.5 368.1 58 438.2 128 472.9l0 39.1 256 0 0-39.1c70-34.6 119.5-104.8 124.4-187.7L512 224z" />
    </Icon>
);

export default BowlChopsticks;