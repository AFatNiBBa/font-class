
import { Icon } from "../../index";

/**
 * A component that renders the `computer-classic` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-classic?s=sharp-solid computer-classic}
 * @preview ![computer-classic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/computer-classic.svg)
 */
const ComputerClassic: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 0L448 0l0 416L0 416 0 0zM32 512l0-64 384 0 0 64L32 512zM384 64L64 64l0 192 320 0 0-192zM80 360a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm144-40l0 32 16 0 128 0 16 0 0-32-16 0-128 0-16 0z" />
    </Icon>
);

export default ComputerClassic;