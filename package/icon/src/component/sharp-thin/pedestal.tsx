
import { Icon } from "../../index";

/**
 * A component that renders the `pedestal` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pedestal?s=sharp-thin pedestal}
 * @preview ![pedestal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pedestal.svg)
 */
const Pedestal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 16L48 16l0 448-16 0L32 16 32 0 48 0 400 0l16 0 0 16 0 448-16 0 0-448zM8 496l432 0 8 0 0 16-8 0L8 512l-8 0 0-16 8 0zM96 96a32 32 0 1 1 64 0A32 32 0 1 1 96 96zm32 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM320 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm16 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Pedestal;