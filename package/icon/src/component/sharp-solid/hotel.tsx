
import { Icon } from "../../index";

/**
 * A component that renders the `hotel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hotel?s=sharp-solid hotel}
 * @preview ![hotel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hotel.svg)
 */
const Hotel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L512 0l0 64-32 0 0 384 32 0 0 64-208 0 0-96-96 0 0 96L0 512l0-64 32 0L32 64 0 64 0 0zM96 96l0 64 64 0 0-64L96 96zm192 0l-64 0 0 64 64 0 0-64zm64 0l0 64 64 0 0-64-64 0zM160 192l-64 0 0 64 64 0 0-64zm64 0l0 64 64 0 0-64-64 0zm192 0l-64 0 0 64 64 0 0-64zM352 384c0-53-43-96-96-96s-96 43-96 96l192 0z" />
    </Icon>
);

export default Hotel;