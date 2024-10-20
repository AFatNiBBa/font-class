
import { Icon } from "../../index";

/**
 * A component that renders the `coffin-cross` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin-cross?s=sharp-solid coffin-cross}
 * @preview ![coffin-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/coffin-cross.svg)
 */
const CoffinCross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M104 512L0 144 112 0 272 0 384 144 280 512l-176 0zM216 120l0-24-48 0 0 24 0 40-48 0-24 0 0 48 24 0 48 0 0 120 0 24 48 0 0-24 0-120 48 0 24 0 0-48-24 0-48 0 0-40z" />
    </Icon>
);

export default CoffinCross;