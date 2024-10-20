
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d4` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d4?s=sharp-light dice-d4}
 * @preview ![dice-d4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dice-d4.svg)
 */
const DiceD4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M235.5 25.6L20 295 0 320l25.6 19.2L240 500l16 12 16-12L486.4 339.2 512 320l-20-25L276.5 25.6 272 20 256 0 240 20l-4.5 5.6zM240 71.2L240 460 45.6 314.2 240 71.2zM272 460l0-388.8 194.4 243L272 460z" />
    </Icon>
);

export default DiceD4;