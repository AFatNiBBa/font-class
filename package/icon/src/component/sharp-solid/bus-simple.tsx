
import { Icon } from "../../index";

/**
 * A component that renders the `bus-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bus-simple?s=sharp-solid bus-simple}
 * @preview ![bus-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bus-simple.svg)
 */
const BusSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0C348.8 0 448 48 448 48l0 48 0 352-32 0 0 64-96 0 0-64-192 0 0 64-96 0 0-64L0 448 0 96 0 48S99.2 0 224 0zM64 288l320 0 0-192L64 96l0 192zM80 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default BusSimple;