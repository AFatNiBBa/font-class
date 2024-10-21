
import { Icon } from "../../index";

/**
 * A component that renders the `square-small` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-small?s=light square-small}
 * @preview ![square-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-small.svg)
 */
const SquareSmall: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M256 128c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32L64 384c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32l192 0zM64 96C28.7 96 0 124.7 0 160L0 352c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 96z" />
    </Icon>
);

export default SquareSmall;