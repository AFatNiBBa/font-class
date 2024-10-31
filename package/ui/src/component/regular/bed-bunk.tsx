
import { Icon } from "../../index";

/**
 * A component that renders the `bed-bunk` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-bunk?s=regular bed-bunk}
 * @preview ![bed-bunk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bed-bunk.svg)
 */
const BedBunk: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 0C37.3 0 48 10.7 48 24l0 136 208 0 0-120c0-22.1 17.9-40 40-40L456 0c66.3 0 120 53.7 120 120l0 64 0 96 0 159.7 0 48.3c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24.3-248 0-232 0L48 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48.3L0 184 0 24C0 10.7 10.7 0 24 0zM256 415.7L256 296c0-22.1 17.9-40 40-40l232 0 0-48-248 0L48 208l0 207.7 208 0zM528 160l0-40c0-39.8-32.2-72-72-72L304 48l0 112 224 0zm0 144l-224 0 0 111.7 224 0L528 304zM96 328a56 56 0 1 1 112 0A56 56 0 1 1 96 328zM152 16a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
    </Icon>
);

export default BedBunk;