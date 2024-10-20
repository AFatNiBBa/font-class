
import { Icon } from "../../index";

/**
 * A component that renders the `dice` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice?s=sharp-solid dice}
 * @preview ![dice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dice.svg)
 */
const Dice: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 224L224 0 448 224 224 448 0 224zm248 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM96 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm128 80a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm128-80a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM224 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm96 325.3L470.6 246.6 493.3 224l-22.6-22.6-9.4-9.4L640 192l0 320-320 0 0-114.7zM504 352a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Dice;