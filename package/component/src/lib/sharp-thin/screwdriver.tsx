
import { Icon } from "../../index";

/**
 * A component that renders the `screwdriver` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=sharp-thin screwdriver}
 * @preview ![screwdriver](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/screwdriver.svg)
 */
const Screwdriver: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 104l0 72 72 0L490.9 65.5 446.5 21.1 336 104zm-4.7 88l-71 71L249 251.7l71-71 0-4.7 0-80L448 0l64 64L416 192l-80 0-4.7 0zm-224 308.7L96 512 84.7 500.7 11.3 427.3 0 416l11.3-11.3L172.7 243.3 184 232l11.3 11.3 73.4 73.4L280 328l-11.3 11.3L107.3 500.7zM257.4 328L184 254.6 22.6 416 96 489.4 257.4 328z" />
    </Icon>
);

export default Screwdriver;