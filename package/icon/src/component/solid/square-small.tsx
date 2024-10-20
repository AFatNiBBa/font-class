
import { Icon } from "../../index";

/**
 * A component that renders the `square-small` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=solid square-small}
 * @preview ![square-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-small.svg)
 */
const SquareSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 160c0-35.3 28.7-64 64-64H256c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160z" />
    </Icon>
);

export default SquareSmall;