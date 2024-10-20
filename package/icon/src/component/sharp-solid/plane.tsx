
import { Icon } from "../../index";

/**
 * A component that renders the `plane` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane?s=sharp-solid plane}
 * @preview ![plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/plane.svg)
 */
const Plane: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L256 512l-96 0 54.9-192L112 320 64 384 0 384 32 256 0 128l64 0 48 64 102.9 0L160 0l96 0L365.7 192l116.6 0z" />
    </Icon>
);

export default Plane;