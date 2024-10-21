
import { Icon } from "../../index";

/**
 * A component that renders the `brush` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=sharp-regular brush}
 * @preview ![brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/brush.svg)
 */
const Brush: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 288L48 48l48 0 0 96 0 16 32 0 0-16 0-96 64 0 0 64 0 16 32 0 0-16 0-64 112 0 0 240L48 288zM0 384l48 0 80 0 0 128 128 0 0-128 80 0 48 0 0-48 0-288 0-48L336 0 48 0 0 0 0 48 0 336l0 48zm192 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Brush;