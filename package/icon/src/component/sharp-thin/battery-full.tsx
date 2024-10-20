
import { Icon } from "../../index";

/**
 * A component that renders the `battery-full` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-full?s=sharp-thin battery-full}
 * @preview ![battery-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/battery-full.svg)
 */
const BatteryFull: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 112l0 80 0 16 0 96 0 16 0 80L16 400l0-288 496 0zm16 288l0-80 32 0 16 0 0-16 0-96 0-16-16 0-32 0 0-80 0-16-16 0L16 96 0 96l0 16L0 400l0 16 16 0 496 0 16 0 0-16zm0-96l0-96 32 0 0 96-32 0zM80 176l368 0 0 160L80 336l0-160zM64 160l0 16 0 160 0 16 16 0 368 0 16 0 0-16 0-160 0-16-16 0L80 160l-16 0z" />
    </Icon>
);

export default BatteryFull;