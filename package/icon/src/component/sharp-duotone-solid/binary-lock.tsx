
import { Icon, generic } from "../../index";

/**
 * A component that renders the `binary-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-lock?s=sharp-duotone-solid binary-lock}
 * @preview ![binary-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/binary-lock.svg)
 */
const BinaryLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L32 0 160 0l32 0 0 32 0 160 0 32-32 0L32 224 0 224l0-32L0 32 0 0zM0 288l32 0 48 0 32 0 0 32 0 128 16 0 32 0 0 64-32 0-48 0-48 0L0 512l0-64 32 0 16 0 0-96-16 0L0 352l0-64zM64 64l0 96 64 0 0-96L64 64zM192 288l32 0 128 0 32 0 0 32 0 160 0 32-32 0-128 0-32 0 0-32 0-160 0-32zM224 0l32 0 48 0 32 0 0 32 0 128 16 0 32 0 0 64-32 0-48 0-48 0-32 0 0-64 32 0 16 0 0-96-16 0-32 0 0-64zm32 352l0 96 64 0 0-96-64 0z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default BinaryLock;