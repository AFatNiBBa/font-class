
import { Icon } from "../../index";

/**
 * A component that renders the `clone` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clone?s=light clone}
 * @preview ![clone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clone.svg)
 */
const Clone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 480l224 0c17.7 0 32-14.3 32-32l0-64 32 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l64 0 0 32-64 0c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32zM224 320l224 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L224 32c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32zm-64-32l0-224c0-35.3 28.7-64 64-64L448 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64z" />
    </Icon>
);

export default Clone;