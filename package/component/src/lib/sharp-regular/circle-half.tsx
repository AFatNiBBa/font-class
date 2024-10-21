
import { Icon } from "../../index";

/**
 * A component that renders the `circle-half` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half?s=sharp-regular circle-half}
 * @preview ![circle-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-half.svg)
 */
const CircleHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 53.6l0 404.9C116.3 436.8 48 354.4 48 256s68.3-180.8 160-202.4zm0-49.1C89.6 27 0 131 0 256S89.6 485 208 507.5c15.5 3 31.6 4.5 48 4.5l0-48 0-416 0-48c-16.4 0-32.5 1.5-48 4.5z" />
    </Icon>
);

export default CircleHalf;