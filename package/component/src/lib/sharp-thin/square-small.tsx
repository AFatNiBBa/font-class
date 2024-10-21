
import { Icon } from "../../index";

/**
 * A component that renders the `square-small` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=sharp-thin square-small}
 * @preview ![square-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-small.svg)
 */
const SquareSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M304 112l0 288L16 400l0-288 288 0zM16 96L0 96l0 16L0 400l0 16 16 0 288 0 16 0 0-16 0-288 0-16-16 0L16 96z" />
    </Icon>
);

export default SquareSmall;