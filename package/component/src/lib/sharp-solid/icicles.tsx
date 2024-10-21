
import { Icon } from "../../index";

/**
 * A component that renders the `icicles` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/icicles?s=sharp-solid icicles}
 * @preview ![icicles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/icicles.svg)
 */
const Icicles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 352L0 0H512L416 512 336 160 288 352 240 192 192 416 144 192 96 352z" />
    </Icon>
);

export default Icicles;