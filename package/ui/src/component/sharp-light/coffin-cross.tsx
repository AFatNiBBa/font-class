
import { Icon } from "../../index";

/**
 * A component that renders the `coffin-cross` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin-cross?s=sharp-light coffin-cross}
 * @preview ![coffin-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/coffin-cross.svg)
 */
const CoffinCross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M35.2 150.9L127.7 32l128.7 0 92.5 118.9L255.8 480l-127.6 0-93-329.1zM104 512l176 0L384 144 272 0 112 0 0 144 104 512zM208 112l0-16-32 0 0 16 0 64-64 0-16 0 0 32 16 0 64 0 0 128 0 16 32 0 0-16 0-128 64 0 16 0 0-32-16 0-64 0 0-64z" />
    </Icon>
);

export default CoffinCross;