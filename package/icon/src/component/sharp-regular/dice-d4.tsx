
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d4` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d4?s=sharp-regular dice-d4}
 * @preview ![dice-d4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dice-d4.svg)
 */
const DiceD4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M225.3 38.4L30 282.5 0 320l38.4 28.8L232 494l24 18 24-18L473.6 348.8 512 320l-30-37.5L286.7 38.4 280 30 256 0 232 30l-6.7 8.4zm6.7 68.4L232 434 68.4 311.3 232 106.8zM280 434l0-327.2L443.6 311.3 280 434z" />
    </Icon>
);

export default DiceD4;