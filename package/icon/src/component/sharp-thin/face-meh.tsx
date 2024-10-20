
import { Icon } from "../../index";

/**
 * A component that renders the `face-meh` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-meh?s=sharp-thin face-meh}
 * @preview ![face-meh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-meh.svg)
 */
const FaceMeh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM176.4 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm176-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM168 344l-8 0 0 16 8 0 176 0 8 0 0-16-8 0-176 0z" />
    </Icon>
);

export default FaceMeh;