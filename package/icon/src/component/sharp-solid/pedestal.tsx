
import { Icon } from "../../index";

/**
 * A component that renders the `pedestal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pedestal?s=sharp-solid pedestal}
 * @preview ![pedestal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pedestal.svg)
 */
const Pedestal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 0L32 0l0 416 384 0L416 0zM120 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM304 88a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM32 448L0 448l0 64 32 0 384 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default Pedestal;