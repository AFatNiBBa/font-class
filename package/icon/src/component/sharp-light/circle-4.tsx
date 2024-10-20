
import { Icon } from "../../index";

/**
 * A component that renders the `circle-4` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-4?s=sharp-light circle-4}
 * @preview ![circle-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-4.svg)
 */
const Circle_4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM145.1 298.1L136.4 320l23.6 0 128 0 0 48 0 16 32 0 0-16 0-48 16 0 16 0 0-32-16 0-16 0 0-80 0-16-32 0 0 16 0 80-104.4 0 63.2-158.1 .8-1.9-34.5 0-68 170.1z" />
    </Icon>
);

export default Circle_4;