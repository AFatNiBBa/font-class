
import { Icon } from "../../index";

/**
 * A component that renders the `comma` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comma?s=sharp-thin comma}
 * @preview ![comma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/comma.svg)
 */
const Comma: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M145.7 363.2L57.1 496l-28.3 0L63 304l82.6 0 0 59.2zM49.7 288L12.5 496 9.7 512l16.3 0 39.7 0 96-144 0-64 0-16-16 0-96 0z" />
    </Icon>
);

export default Comma;