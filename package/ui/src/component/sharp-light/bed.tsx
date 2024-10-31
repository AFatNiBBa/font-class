
import { Icon } from "../../index";

/**
 * A component that renders the `bed` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed?s=sharp-light bed}
 * @preview ![bed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bed.svg)
 */
const Bed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 48l0-16L0 32 0 48 0 336l0 64 0 64 0 16 32 0 0-16 0-48 576 0 0 48 0 16 32 0 0-16 0-64 0-64 0-96c0-61.9-50.1-112-112-112l-256 0-16 0 0 16 0 176L32 320 32 48zM608 384L32 384l0-32 240 0 336 0 0 32zm0-144l0 80-320 0 0-160 240 0c44.2 0 80 35.8 80 80zM96 208a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0A80 80 0 1 0 64 208a80 80 0 1 0 160 0z" />
    </Icon>
);

export default Bed;