
import { Icon } from "../../index";

/**
 * A component that renders the `dice` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice?s=sharp-light dice}
 * @preview ![dice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dice.svg)
 */
const Dice: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 224l22.6 22.6L201.4 425.4 224 448l22.6-22.6L425.4 246.6 448 224l-22.6-22.6L246.6 22.6 224 0 201.4 22.6 22.6 201.4 0 224zM224 402.7L45.3 224 224 45.3 402.7 224 224 402.7zM224 248a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-72-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm96 96a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm96-96a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-96-96a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 352l0 32 32 0 256 0 32 0 0-32 0-256 0-32-32 0-146.7 0 9.4 9.4L493.3 224 608 224l0 256-256 0 0-114.7-32 32 0 82.7zM480 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Dice;