
import { Icon } from "../../index";

/**
 * A component that renders the `stairs` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=light stairs}
 * @preview ![stairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/stairs.svg)
 */
const Stairs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 48c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L448 64l0 112c0 8.8-7.2 16-16 16l-128 0 0 144c0 8.8-7.2 16-16 16l-128 0 0 112c0 8.8-7.2 16-16 16L16 480c-8.8 0-16-7.2-16-16s7.2-16 16-16l112 0 0-112c0-8.8 7.2-16 16-16l128 0 0-144c0-8.8 7.2-16 16-16l128 0 0-112z" />
    </Icon>
);

export default Stairs;