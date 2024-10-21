
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-right?s=sharp-solid circle-up-right}
 * @preview ![circle-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-up-right.svg)
 */
const CircleUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm96 320l0-160-160 0-24 24 52 52-76 76 56 56 76-76 52 52 24-24z" />
    </Icon>
);

export default CircleUpRight;