
import { Icon } from "../../index";

/**
 * A component that renders the `bowl-chopsticks` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-chopsticks?s=sharp-solid bowl-chopsticks}
 * @preview ![bowl-chopsticks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bowl-chopsticks.svg)
 */
const BowlChopsticks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96l0 32L512 48l0-48L0 96zm0 48l0 32 512 0 0-48L0 144zm512 80L0 224l3.6 61.2C8.5 368.1 58 438.2 128 472.9l0 39.1 256 0 0-39.1c70-34.6 119.5-104.8 124.4-187.7L512 224z" />
    </Icon>
);

export default BowlChopsticks;