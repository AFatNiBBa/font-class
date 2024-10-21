
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=sharp-regular hexagon}
 * @preview ![hexagon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hexagon.svg)
 */
const Hexagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M155.9 432l200.3 0L456.7 256 356.1 80 155.9 80 55.3 256 155.9 432zM0 256L128 32l256 0L512 256 384 480l-256 0L0 256z" />
    </Icon>
);

export default Hexagon;