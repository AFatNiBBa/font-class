
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-code` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-code?s=sharp-regular rectangle-code}
 * @preview ![rectangle-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rectangle-code.svg)
 */
const RectangleCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 80l0 352L48 432 48 80l416 0zM48 32L0 32 0 80 0 432l0 48 48 0 416 0 48 0 0-48 0-352 0-48-48 0L48 32zM270.1 192l17 17 47 47-47 47-17 17L304 353.9l17-17 64-64 17-17-17-17-64-64-17-17L270.1 192zM225 209l17-17L208 158.1l-17 17-64 64-17 17 17 17 64 64 17 17L241.9 320l-17-17-47-47 47-47z" />
    </Icon>
);

export default RectangleCode;