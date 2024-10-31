
import { Icon } from "../../index";

/**
 * A component that renders the `image` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image?s=thin image}
 * @preview ![image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/image.svg)
 */
const Image: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 260.7 89.4-89.4c12.5-12.5 32.8-12.5 45.3 0L224 340.7 361.4 203.3c12.5-12.5 32.8-12.5 45.3 0L496 292.7 496 96c0-26.5-21.5-48-48-48L64 48zM16 379.3L16 416c0 26.5 21.5 48 48 48l36.7 0 112-112-73.4-73.4c-6.2-6.2-16.4-6.2-22.6 0L16 379.3zM395.3 214.6c-6.2-6.2-16.4-6.2-22.6 0L123.3 464 448 464c26.5 0 48-21.5 48-48l0-100.7L395.3 214.6zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm168 64a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm-96 0a56 56 0 1 1 112 0A56 56 0 1 1 72 160z" />
    </Icon>
);

export default Image;