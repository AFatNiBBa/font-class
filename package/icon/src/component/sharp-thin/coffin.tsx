
import { Icon } from "../../index";

/**
 * A component that renders the `coffin` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin?s=sharp-thin coffin}
 * @preview ![coffin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/coffin.svg)
 */
const Coffin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M116.1 496l151.8 0 98.5-348.6L264.2 16 119.8 16 17.6 147.4 116.1 496zM280 512l-176 0L0 144 112 0 272 0 384 144 280 512z" />
    </Icon>
);

export default Coffin;