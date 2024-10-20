
import { Icon, generic } from "../../index";

/**
 * A component that renders the `suitcase-rolling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase-rolling?s=sharp-duotone-solid suitcase-rolling}
 * @preview ![suitcase-rolling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/suitcase-rolling.svg)
 */
const SuitcaseRolling: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 480l0 32 64 0 0-32-64 0zM96 0l0 24 0 80 0 24 48 0 0-24 0-56 96 0 0 56 0 24 48 0 0-24 0-80 0-24L264 0 120 0 96 0zM256 480l0 32 64 0 0-32-64 0z" />
        <path d="M384 128L0 128 0 480l384 0 0-352zM112 224l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zm0 128l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0z" />
    </Icon>
);

export default SuitcaseRolling;