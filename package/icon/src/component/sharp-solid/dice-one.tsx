
import { Icon } from "../../index";

/**
 * A component that renders the `dice-one` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-one?s=sharp-solid dice-one}
 * @preview ![dice-one](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dice-one.svg)
 */
const DiceOne: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default DiceOne;