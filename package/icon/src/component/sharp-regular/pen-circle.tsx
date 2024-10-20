
import { Icon } from "../../index";

/**
 * A component that renders the `pen-circle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-circle?s=sharp-regular pen-circle}
 * @preview ![pen-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pen-circle.svg)
 */
const PenCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144 32L252.7 179.3l80 80L224 368l-96 16 16-96zm256-96l-44.7 44.7-80-80L320 112l80 80z" />
    </Icon>
);

export default PenCircle;