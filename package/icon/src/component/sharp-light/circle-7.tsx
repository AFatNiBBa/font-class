
import { Icon } from "../../index";

/**
 * A component that renders the `circle-7` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-7?s=sharp-light circle-7}
 * @preview ![circle-7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-7.svg)
 */
const Circle_7: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm96-364.1l0-19.9-16 0-160 0-16 0 0 32 16 0 133.8 0L194.6 384l36 0L350.2 151.3l1.8-3.4z" />
    </Icon>
);

export default Circle_7;