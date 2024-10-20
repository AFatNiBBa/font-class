
import { Icon } from "../../index";

/**
 * A component that renders the `face-meh` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-meh?s=regular face-meh}
 * @preview ![face-meh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-meh.svg)
 */
const FaceMeh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm192-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM184 328c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
    </Icon>
);

export default FaceMeh;