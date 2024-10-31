
import { Icon } from "../../index";

/**
 * A component that renders the `binary` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary?s=sharp-regular binary}
 * @preview ![binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/binary.svg)
 */
const Binary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M248 0l56 0 24 0 0 24 0 152 32 0 24 0 0 48-24 0-56 0-56 0-24 0 0-48 24 0 32 0 0-128-32 0-24 0 0-48 24 0zM24 288l56 0 24 0 0 24 0 152 32 0 24 0 0 48-24 0-56 0-56 0L0 512l0-48 24 0 32 0 0-128-32 0L0 336l0-48 24 0zM0 0L24 0 168 0l24 0 0 24 0 176 0 24-24 0L24 224 0 224l0-24L0 24 0 0zM48 48l0 128 96 0 0-128L48 48zM216 288l144 0 24 0 0 24 0 176 0 24-24 0-144 0-24 0 0-24 0-176 0-24 24 0zm24 176l96 0 0-128-96 0 0 128z" />
    </Icon>
);

export default Binary;