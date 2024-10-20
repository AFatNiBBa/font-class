
import { Icon } from "../../index";

/**
 * A component that renders the `battery-exclamation` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-exclamation?s=sharp-thin battery-exclamation}
 * @preview ![battery-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/battery-exclamation.svg)
 */
const BatteryExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 112l0 80 0 16 0 96 0 16 0 80L16 400l0-288 496 0zm16 288l0-80 32 0 16 0 0-16 0-96 0-16-16 0-32 0 0-80 0-16-16 0L16 96 0 96l0 16L0 400l0 16 16 0 496 0 16 0 0-16zm0-96l0-96 32 0 0 96-32 0zM280 144l-16 0 0 8 0 144 0 8 16 0 0-8 0-144 0-8zM256 336l0 32 32 0 0-32-32 0z" />
    </Icon>
);

export default BatteryExclamation;