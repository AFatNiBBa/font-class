
import { Icon } from "../../index";

/**
 * A component that renders the `circle-7` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-7?s=sharp-solid circle-7}
 * @preview ![circle-7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-7.svg)
 */
const Circle_7: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm72-384l24 0 0 29.4-2.3 4.9L245.5 384l-53 0 3.9-8.2L290.2 176 184 176l-24 0 0-48 24 0 144 0z" />
    </Icon>
);

export default Circle_7;