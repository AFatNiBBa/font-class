
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess?s=sharp-duotone-solid chess}
 * @preview ![chess](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess.svg)
 */
const Chess: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M288 477.4l1.5-2.1 40-56 2.4-3.4 4.1 0 128 0 4.1 0 2.4 3.4 40 56 1.5 2.1 0 2.6 0 24 0 8-8 0-208 0-8 0 0-8 0-24 0-2.6zM304 192l40 0 0 32 24 0 0-32 64 0 0 32 24 0 0-32 40 0 0 80-36.8 40 3.3 72L337 384l2.2-72L304 272l0-80zm80 112l0 32 32 0 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
        <path d="M144 16l0-16L112 0l0 16 0 16L96 32 80 32l0 32 16 0 16 0 0 32L40 96l0 24 29.3 88L48 208l0 48 24 0 5.8 0L60.4 384l135.3 0L178.2 256l5.8 0 24 0 0-48-21.3 0L216 120l0-24-72 0 0-32 16 0 16 0 0-32-16 0-16 0 0-16zM43.9 416l-2.4 3.4-40 56L0 477.4 0 480l0 24 0 8 8 0 240 0 8 0 0-8 0-24 0-2.6-1.5-2.1-40-56-2.4-3.4-4.1 0L48 416l-4.1 0z" />
    </Icon>
);

export default Chess;