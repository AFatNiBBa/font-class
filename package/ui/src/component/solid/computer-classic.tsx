
import { Icon } from "../../index";

/**
 * A component that renders the `computer-classic` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-classic?s=solid computer-classic}
 * @preview ![computer-classic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/computer-classic.svg)
 */
const ComputerClassic: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 48C0 21.5 21.5 0 48 0L400 0c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L48 416c-26.5 0-48-21.5-48-48L0 48zM32 480l0-32 384 0 0 32c0 17.7-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32zM96 64C78.3 64 64 78.3 64 96l0 128c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L96 64zM80 360a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm144-24c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default ComputerClassic;