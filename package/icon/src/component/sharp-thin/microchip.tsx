
import { Icon } from "../../index";

/**
 * A component that renders the `microchip` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microchip?s=sharp-thin microchip}
 * @preview ![microchip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/microchip.svg)
 */
const Microchip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M168 8l0-8L152 0l0 8 0 56L80 64 64 64l0 16 0 72L8 152l-8 0 0 16 8 0 56 0 0 80L8 248l-8 0 0 16 8 0 56 0 0 80L8 344l-8 0 0 16 8 0 56 0 0 72 0 16 16 0 72 0 0 56 0 8 16 0 0-8 0-56 80 0 0 56 0 8 16 0 0-8 0-56 80 0 0 56 0 8 16 0 0-8 0-56 72 0 16 0 0-16 0-72 56 0 8 0 0-16-8 0-56 0 0-80 56 0 8 0 0-16-8 0-56 0 0-80 56 0 8 0 0-16-8 0-56 0 0-72 0-16-16 0-72 0 0-56 0-8L344 0l0 8 0 56-80 0 0-56 0-8L248 0l0 8 0 56-80 0 0-56zm80 72l16 0 80 0 16 0 72 0 0 72 0 16 0 80 0 16 0 80 0 16 0 72-72 0-16 0-80 0-16 0-80 0-16 0-72 0 0-72 0-16 0-80 0-16 0-80 0-16 0-72 72 0 16 0 80 0zm120 64l0 224-224 0 0-224 224 0zM144 128l-16 0 0 16 0 224 0 16 16 0 224 0 16 0 0-16 0-224 0-16-16 0-224 0z" />
    </Icon>
);

export default Microchip;