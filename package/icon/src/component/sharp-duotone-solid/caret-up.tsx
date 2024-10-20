
import { Icon, generic } from "../../index";

/**
 * A component that renders the `caret-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-up?s=sharp-duotone-solid caret-up}
 * @preview ![caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/caret-up.svg)
 */
const CaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M160 128L0 272l0 48 320 0 0-48L160 128z" />
    </Icon>
);

export default CaretUp;