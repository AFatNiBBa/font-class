
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=sharp-thin battery-empty}
 * @preview ![battery-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/battery-empty.svg)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 112l0 288 496 0 0-80 0-16 0-96 0-16 0-80L16 112zM528 320l0 80 0 16-16 0L16 416 0 416l0-16L0 112 0 96l16 0 496 0 16 0 0 16 0 80 32 0 16 0 0 16 0 96 0 16-16 0-32 0zm0-112l0 96 32 0 0-96-32 0z" />
    </Icon>
);

export default BatteryEmpty;