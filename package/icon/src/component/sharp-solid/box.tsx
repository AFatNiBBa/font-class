
import { Icon } from "../../index";

/**
 * A component that renders the `box` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=sharp-solid box}
 * @preview ![box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/box.svg)
 */
const Box: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32L0 160l208 0 0-128L64 32zM240 160l208 0L384 32 240 32l0 128zm208 32L0 192 0 480l448 0 0-288z" />
    </Icon>
);

export default Box;