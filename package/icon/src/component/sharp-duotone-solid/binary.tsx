
import { Icon, generic } from "../../index";

/**
 * A component that renders the `binary` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary?s=sharp-duotone-solid binary}
 * @preview ![binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/binary.svg)
 */
const Binary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 32 0 192l0 32 32 0 128 0 32 0 0-32 0-160 0-32L160 0 32 0 0 0zM64 64l64 0 0 96-64 0 0-96zM192 288l0 32 0 160 0 32 32 0 128 0 32 0 0-32 0-160 0-32-32 0-128 0-32 0zm64 64l64 0 0 96-64 0 0-96z" />
        <path d="M256 0L224 0l0 64 32 0 16 0 0 96-16 0-32 0 0 64 32 0 48 0 48 0 32 0 0-64-32 0-16 0 0-128 0-32L304 0 256 0zM32 288L0 288l0 64 32 0 16 0 0 96-16 0L0 448l0 64 32 0 48 0 48 0 32 0 0-64-32 0-16 0 0-128 0-32-32 0-48 0z" />
    </Icon>
);

export default Binary;