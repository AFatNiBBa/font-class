
import { Icon } from "../../index";

/**
 * A component that renders the `diamonds-4` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamonds-4?s=sharp-solid diamonds-4}
 * @preview ![diamonds-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diamonds-4.svg)
 */
const Diamonds_4: typeof Icon = x => (
    <Icon {...x}>
        <path d="M116.7 139.3L0 256 116.7 372.7 233.4 256 116.7 139.3zm22.6-22.6L256 233.4 372.7 116.7 256 0 139.3 116.7zm256 22.6L278.6 256 395.3 372.7 512 256 395.3 139.3zm-22.6 256L256 278.6 139.3 395.3 256 512 372.7 395.3z" />
    </Icon>
);

export default Diamonds_4;