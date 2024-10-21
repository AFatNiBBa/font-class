
import { Icon } from "../../index";

/**
 * A component that renders the `a` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/a?s=sharp-regular a}
 * @preview ![a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/a.svg)
 */
const A: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M175.5 32l33 0 5.9 15.4L380.7 480l-51.4 0-36.9-96L91.6 384 54.7 480 3.3 480 169.6 47.4 175.5 32zM192 122.9L110.1 336l163.9 0L192 122.9z" />
    </Icon>
);

export default A;