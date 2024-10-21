
import { Icon } from "../../index";

/**
 * A component that renders the `dice-one` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-one?s=sharp-light dice-one}
 * @preview ![dice-one](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dice-one.svg)
 */
const DiceOne: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM224 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default DiceOne;