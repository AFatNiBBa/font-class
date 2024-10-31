
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-food` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-food?s=duotone bowl-food}
 * @preview ![bowl-food](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bowl-food.svg)
 */
const BowlFood: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192c0 11.7 3.1 22.6 8.6 32l494.9 0c5.4-9.4 8.6-20.3 8.6-32c0-35.3-28.7-64-64-64c-.5 0-1.1 0-1.6 0C439 91.5 406.7 64 368 64c-15 0-29 4.1-40.9 11.2C313.8 49.6 286.9 32 256 32s-57.8 17.6-71.1 43.2C173 68.1 159 64 144 64c-38.7 0-71 27.5-78.4 64c-.5 0-1.1 0-1.6 0c-35.3 0-64 28.7-64 64z" />
        <path d="M27.4 256C12.3 256 0 268.3 0 283.4c0 70.5 44.4 130.7 106.7 154.1l1.8 14.4c2 16 15.6 28 31.8 28l231.5 0c16.1 0 29.8-12 31.8-28l1.8-14.4C467.6 414.1 512 353.9 512 283.4c0-15.1-12.3-27.4-27.4-27.4L27.4 256z" />
    </Icon>
);

export default BowlFood;