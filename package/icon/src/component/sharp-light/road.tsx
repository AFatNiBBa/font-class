
import { Icon } from "../../index";

/**
 * A component that renders the `road` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road?s=sharp-light road}
 * @preview ![road](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/road.svg)
 */
const Road: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M42.4 448L272 448l0-48 0-16 32 0 0 16 0 48 229.6 0L423.9 64 304 64l0 48 0 16-32 0 0-16 0-48L152.1 64 42.4 448zM304 32l144 0L566.9 448l9.1 32-33.3 0L304 480l-32 0L33.3 480 0 480l9.1-32L128 32l144 0 32 0zm0 176l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16z" />
    </Icon>
);

export default Road;