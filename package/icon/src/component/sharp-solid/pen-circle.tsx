
import { Icon } from "../../index";

/**
 * A component that renders the `pen-circle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-circle?s=sharp-solid pen-circle}
 * @preview ![pen-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pen-circle.svg)
 */
const PenCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM144 288L252.7 179.3l80 80L224 368l-96 16 16-96zm256-96l-44.7 44.7-80-80L320 112l80 80z" />
    </Icon>
);

export default PenCircle;