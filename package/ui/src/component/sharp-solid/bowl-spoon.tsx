
import { Icon } from "../../index";

/**
 * A component that renders the `bowl-spoon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-spoon?s=sharp-solid bowl-spoon}
 * @preview ![bowl-spoon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bowl-spoon.svg)
 */
const BowlSpoon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96C0 43 50.1 0 112 0L224 0l0 64 256 0 32 0 0 64-32 0-256 0 0 64-112 0C50.1 192 0 149 0 96zM0 224l512 0-3.6 61.2C503.5 368.1 454 438.2 384 472.9l0 39.1-256 0 0-39.1C58 438.2 8.5 368.1 3.6 285.2L0 224z" />
    </Icon>
);

export default BowlSpoon;