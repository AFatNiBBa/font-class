
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=sharp-thin hexagon}
 * @preview ![hexagon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hexagon.svg)
 */
const Hexagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M137.3 464l237.4 0L493.6 256 374.7 48 137.3 48 18.4 256 137.3 464zM0 256L128 32l256 0L512 256 384 480l-256 0L0 256z" />
    </Icon>
);

export default Hexagon;