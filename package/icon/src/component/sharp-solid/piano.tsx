
import { Icon } from "../../index";

/**
 * A component that renders the `piano` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano?s=sharp-solid piano}
 * @preview ![piano](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/piano.svg)
 */
const Piano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 192L0 512l512 0 0-224L384 224l0-32C384 86 298 0 192 0S0 86 0 192zM416 352l32 0 0 96L64 448l0-96 32 0 0 48 0 16 32 0 0-16 0-48 32 0 0 48 0 16 32 0 0-16 0-48 32 0 0 48 0 16 32 0 0-16 0-48 64 0 0 48 0 16 32 0 0-16 0-48 32 0 0 48 0 16 32 0 0-16 0-48z" />
    </Icon>
);

export default Piano;