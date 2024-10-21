
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half?s=light diamond-half}
 * @preview ![diamond-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/diamond-half.svg)
 */
const DiamondHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M227.7 11.7C235.5 3.9 245.8 0 256 0l0 32 0 448 0 32c-10.2 0-20.5-3.9-28.3-11.7l-216-216c-15.6-15.6-15.6-40.9 0-56.6l216-216zM224 451.3l0-390.6L34.3 250.3c-3.1 3.1-3.1 8.2 0 11.3L224 451.3z" />
    </Icon>
);

export default DiamondHalf;