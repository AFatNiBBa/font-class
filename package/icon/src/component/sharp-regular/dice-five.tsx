
import { Icon } from "../../index";

/**
 * A component that renders the `dice-five` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-five?s=sharp-regular dice-five}
 * @preview ![dice-five](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dice-five.svg)
 */
const DiceFive: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zm128 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM288 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default DiceFive;