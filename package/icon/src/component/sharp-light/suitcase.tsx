
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase?s=sharp-light suitcase}
 * @preview ![suitcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/suitcase.svg)
 */
const Suitcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 0L128 0l0 16 0 80L32 96 0 96l0 32L0 448l0 32 32 0 448 0 32 0 0-32 0-320 0-32-32 0-96 0 0-80 0-16L368 0 144 0zM352 96L160 96l0-64 192 0 0 64zM144 128l224 0 16 0 0 320-256 0 0-320 16 0zM32 128l64 0 0 320-64 0 0-320zM480 448l-64 0 0-320 64 0 0 320z" />
    </Icon>
);

export default Suitcase;