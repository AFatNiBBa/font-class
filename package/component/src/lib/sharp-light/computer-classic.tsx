
import { Icon } from "../../index";

/**
 * A component that renders the `computer-classic` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-classic?s=sharp-light computer-classic}
 * @preview ![computer-classic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/computer-classic.svg)
 */
const ComputerClassic: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 32l0 368L32 400 32 32l384 0zM32 0L0 0 0 32 0 400l0 32 32 0 0 48 0 32 32 0 320 0 32 0 0-32 0-48 32 0 0-32 0-368 0-32L416 0 32 0zM64 432l320 0 0 48L64 480l0-48zM352 96l0 128L96 224 96 96l256 0zM96 64L64 64l0 32 0 128 0 32 32 0 256 0 32 0 0-32 0-128 0-32-32 0L96 64zM224 320l0 32 16 0 128 0 16 0 0-32-16 0-128 0-16 0zM96 360a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default ComputerClassic;