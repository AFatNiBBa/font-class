
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice?s=sharp-duotone-solid dice}
 * @preview ![dice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dice.svg)
 */
const Dice: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224L224 448 448 224 224 0 0 224zm120 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM248 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 128a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 128a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM376 224a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M224 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM96 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm128 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 80a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm128-80a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM320 397.3L320 512l320 0 0-320-178.7 0 9.4 9.4L493.3 224l-22.6 22.6L320 397.3zM456 352a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Dice;