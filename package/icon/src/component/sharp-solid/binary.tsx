
import { Icon } from "../../index";

/**
 * A component that renders the `binary` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary?s=sharp-solid binary}
 * @preview ![binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/binary.svg)
 */
const Binary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 0l48 0 32 0 0 32 0 128 16 0 32 0 0 64-32 0-48 0-48 0-32 0 0-64 32 0 16 0 0-96-16 0-32 0 0-64 32 0zM32 288l48 0 32 0 0 32 0 128 16 0 32 0 0 64-32 0-48 0-48 0L0 512l0-64 32 0 16 0 0-96-16 0L0 352l0-64 32 0zM0 0L32 0 160 0l32 0 0 32 0 160 0 32-32 0L32 224 0 224l0-32L0 32 0 0zM64 64l0 96 64 0 0-96L64 64zM224 288l128 0 32 0 0 32 0 160 0 32-32 0-128 0-32 0 0-32 0-160 0-32 32 0zm32 160l64 0 0-96-64 0 0 96z" />
    </Icon>
);

export default Binary;