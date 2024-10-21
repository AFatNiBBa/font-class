
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d4` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d4?s=sharp-solid dice-d4}
 * @preview ![dice-d4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dice-d4.svg)
 */
const DiceD4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 320L240 0l0 512L0 320zM272 0L512 320 272 512 272 0z" />
    </Icon>
);

export default DiceD4;