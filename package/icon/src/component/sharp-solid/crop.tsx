
import { Icon } from "../../index";

/**
 * A component that renders the `crop` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop?s=sharp-solid crop}
 * @preview ![crop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/crop.svg)
 */
const Crop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l0 32 0 32 0 64 0 210.7L338.7 128 192 128l-32 0 0-64 32 0 210.7 0 38.6-38.6L464 2.7 509.3 48 486.6 70.6 448 109.3 448 384l32 0 32 0 0 64-32 0-32 0 0 32 0 32-64 0 0-32 0-32 0-64 0-210.7L173.3 384 320 384l32 0 0 64-32 0L96 448l-32 0 0-32 0-288-32 0L0 128 0 64l32 0 32 0 0-32L64 0l64 0z" />
    </Icon>
);

export default Crop;