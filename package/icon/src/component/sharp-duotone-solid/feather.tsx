
import { Icon, generic } from "../../index";

/**
 * A component that renders the `feather` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather?s=sharp-duotone-solid feather}
 * @preview ![feather](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/feather.svg)
 */
const Feather: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 224l0 190.1c69.3-69.3 138.6-138.6 207.9-207.9c5.7-5.7 11.3-11.3 17-17c11.3 11.3 22.6 22.6 33.9 33.9c-5.7 5.7-11.3 11.3-17 17C236.5 309.4 167.2 378.7 97.9 448L288 448l64-64-48 0 0-16 91.4-27.4L448 288l-80 0 0-16 124.8-37.4C505.3 211.9 512 186.3 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L64 224z" />
        <path d="M6.1 472l17-17L271.9 206.1l17-17 33.9 33.9-17 17L57 489l-17 17L6.1 472z" />
    </Icon>
);

export default Feather;