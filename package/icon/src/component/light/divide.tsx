
import { Icon } from "../../index";

/**
 * A component that renders the `divide` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=light divide}
 * @preview ![divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/divide.svg)
 */
const Divide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM416 272c8.8 0 16-7.2 16-16s-7.2-16-16-16L32 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l384 0z" />
    </Icon>
);

export default Divide;