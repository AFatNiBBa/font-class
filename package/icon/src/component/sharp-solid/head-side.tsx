
import { Icon } from "../../index";

/**
 * A component that renders the `head-side` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side?s=sharp-solid head-side}
 * @preview ![head-side](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/head-side.svg)
 */
const HeadSide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 224.3C0 100.4 100.4 0 224.3 0L256 0C358.1 0 441.6 79.7 447.7 180.3L505 252l7 8.8 0 11.2 0 16 0 32-32 0-32 0 0 96 0 32-32 0-96 0 0 32 0 32-32 0L96 512l-32 0 0-32 0-98.8C23 339.3 0 283 0 224.3zm352-.3a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default HeadSide;