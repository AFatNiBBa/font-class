
import { Icon } from "../../index";

/**
 * A component that renders the `circle-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-right?s=sharp-solid circle-right}
 * @preview ![circle-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-right.svg)
 */
const CircleRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM256 384l0-80-128 0 0-96 128 0 0-80 16 0L400 256 272 384l-16 0z" />
    </Icon>
);

export default CircleRight;