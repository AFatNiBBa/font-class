
import { Icon } from "../../index";

/**
 * A component that renders the `face-meh` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-meh?s=light face-meh}
 * @preview ![face-meh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/face-meh.svg)
 */
const FaceMeh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM176.4 232a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm184-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM176 336c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0z" />
    </Icon>
);

export default FaceMeh;