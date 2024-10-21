
import { Icon } from "../../index";

/**
 * A component that renders the `coffin-cross` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin-cross?s=sharp-regular coffin-cross}
 * @preview ![coffin-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/coffin-cross.svg)
 */
const CoffinCross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M52.8 154.3L135.5 48l113 0 82.7 106.3L243.7 464l-103.4 0L52.8 154.3zM104 512l176 0L384 144 272 0 112 0 0 144 104 512zM216 120l0-24-48 0 0 24 0 40-48 0-24 0 0 48 24 0 48 0 0 120 0 24 48 0 0-24 0-120 48 0 24 0 0-48-24 0-48 0 0-40z" />
    </Icon>
);

export default CoffinCross;