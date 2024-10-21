
import { Icon } from "../../index";

/**
 * A component that renders the `caravan` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan?s=sharp-solid caravan}
 * @preview ![caravan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/caravan.svg)
 */
const Caravan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 32l416 0c88.4 0 160 71.6 160 160l0 160 32 0 32 0 0 64-32 0-32 0-288 0c0 53-43 96-96 96s-96-43-96-96L0 416 0 32zM320 352l128 0 0-96-32 0-16 0 0-32 16 0 32 0 0-96-128 0 0 224zM256 128L64 128l0 128 192 0 0-128zM192 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Caravan;