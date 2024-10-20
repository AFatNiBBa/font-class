
import { Icon } from "../../index";

/**
 * A component that renders the `circle-4` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-4?s=sharp-solid circle-4}
 * @preview ![circle-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-4.svg)
 */
const Circle_4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320-64l-48 0 0 24 0 56-64.4 0 40-144-49.8 0L152.9 289.6 144.4 320l31.6 0 96 0 0 40 0 24 48 0 0-24 0-40 8 0 24 0 0-48-24 0-8 0 0-56 0-24z" />
    </Icon>
);

export default Circle_4;