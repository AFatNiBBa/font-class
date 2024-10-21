
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d8` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=sharp-solid dice-d8}
 * @preview ![dice-d8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dice-d8.svg)
 */
const DiceD8: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 0l0 336L0 248 240 0zm0 368l0 144L32 291.7 240 368zm240-76.3L272 512l0-144 208-76.3zM272 0L512 248 272 336 272 0z" />
    </Icon>
);

export default DiceD8;