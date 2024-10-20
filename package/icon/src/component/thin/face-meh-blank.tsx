
import { Icon } from "../../index";

/**
 * A component that renders the `face-meh-blank` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-meh-blank?s=thin face-meh-blank}
 * @preview ![face-meh-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-meh-blank.svg)
 */
const FaceMehBlank: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480zM512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM160.4 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default FaceMehBlank;