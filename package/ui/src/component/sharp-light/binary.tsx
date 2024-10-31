
import { Icon } from "../../index";

/**
 * A component that renders the `binary` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary?s=sharp-light binary}
 * @preview ![binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/binary.svg)
 */
const Binary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M240 0l64 0 16 0 0 16 0 176 48 0 16 0 0 32-16 0-64 0-64 0-16 0 0-32 16 0 48 0 0-160-48 0-16 0 0-32 16 0zM16 288l64 0 16 0 0 16 0 176 48 0 16 0 0 32-16 0-64 0-64 0L0 512l0-32 16 0 48 0 0-160-48 0L0 320l0-32 16 0zM0 0L16 0 176 0l16 0 0 16 0 192 0 16-16 0L16 224 0 224l0-16L0 16 0 0zM32 32l0 160 128 0 0-160L32 32zM208 288l160 0 16 0 0 16 0 192 0 16-16 0-160 0-16 0 0-16 0-192 0-16 16 0zm16 192l128 0 0-160-128 0 0 160z" />
    </Icon>
);

export default Binary;