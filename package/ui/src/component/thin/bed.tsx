
import { Icon } from "../../index";

/**
 * A component that renders the `bed` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed?s=thin bed}
 * @preview ![bed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bed.svg)
 */
const Bed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 328l0 80 0 64c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 608 0 0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-64 0-80 0-96c0-57.4-46.6-104-104-104l-224 0c-22.1 0-40 17.9-40 40l0 152L16 320 16 40zM624 400L16 400l0-64 264 0 344 0 0 64zm0-168l0 88-336 0 0-152c0-13.3 10.7-24 24-24l224 0c48.6 0 88 39.4 88 88zM80 208a64 64 0 1 1 128 0A64 64 0 1 1 80 208zm144 0A80 80 0 1 0 64 208a80 80 0 1 0 160 0z" />
    </Icon>
);

export default Bed;