
import { Icon } from "../../index";

/**
 * A component that renders the `sliders` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders?s=sharp-solid sliders}
 * @preview ![sliders](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sliders.svg)
 */
const Sliders: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 384l0 64 32 0 32 0 0 48 48 0 64 0 48 0 0-48 256 0 32 0 0-64-32 0-256 0 0-48-48 0-64 0-48 0 0 48-32 0L0 384zM0 224l0 64 32 0 256 0 0 48 48 0 64 0 48 0 0-48 32 0 32 0 0-64-32 0-32 0 0-48-48 0-64 0-48 0 0 48L32 224 0 224zM32 64L0 64l0 64 32 0 64 0 0 48 48 0 64 0 48 0 0-48 224 0 32 0 0-64-32 0L256 64l0-48-48 0-64 0L96 16l0 48L32 64zm80 384l0-64 64 0 0 64-64 0zM336 224l64 0 0 64-64 0 0-64zM144 128l0-64 64 0 0 64-64 0z" />
    </Icon>
);

export default Sliders;