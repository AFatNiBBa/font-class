
import { Icon } from "../../index";

/**
 * A component that renders the `face-meh-blank` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-meh-blank?s=light face-meh-blank}
 * @preview ![face-meh-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/face-meh-blank.svg)
 */
const FaceMehBlank: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM152.4 208a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FaceMehBlank;