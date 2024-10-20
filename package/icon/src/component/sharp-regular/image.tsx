
import { Icon } from "../../index";

/**
 * A component that renders the `image` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image?s=sharp-regular image}
 * @preview ![image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/image.svg)
 */
const Image: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 80l0 347.2-12.6-17.3-128-176L303.8 207 284.5 234 194.3 360.3 161 327l-17.9-17.9-16.9 18.8-72 80L48 414.8 48 80l416 0zM48 32L0 32 0 80 0 432l0 48 48 0 416 0 48 0 0-48 0-352 0-48-48 0L48 32zM192 176a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default Image;