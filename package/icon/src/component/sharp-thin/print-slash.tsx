
import { Icon } from "../../index";

/**
 * A component that renders the `print-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print-slash?s=sharp-thin print-slash}
 * @preview ![print-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/print-slash.svg)
 */
const PrintSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 496l-336 0 0-160 161.1 0-20.3-16L144 320l-16 0 0 16 0 64-48 0 0-192 63 0-20.3-16L80 192l-16 0 0 16 0 192 0 16 16 0 48 0 0 80 0 16 16 0 352 0 16 0 0-12.7-4.2-3.3L496 496l-16 0zM144 16l16 0 281.4 0L496 70.6l0 89.4 16 0 0-96L448 0 144 0 128 0l0 12.7 4.2 3.3L144 16zM560 192l-204.9 0 20.3 16L560 208l0 145.7 16 12.6L576 208l0-16-16 0zm-48 96l0-32-32 0 0 32 32 0zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default PrintSlash;