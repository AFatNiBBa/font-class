
import { Icon } from "../../index";

/**
 * A component that renders the `bring-front` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-front?s=sharp-regular bring-front}
 * @preview ![bring-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bring-front.svg)
 */
const BringFront: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 48l160 0 0 16 48 0 0-16 0-48L208 0 48 0 0 0 0 48 0 208l0 48 48 0 80 0 0-48-80 0L48 48zM384 464l0 48 48 0 160 0 48 0 0-48 0-160 0-48-48 0-80 0 0 48 80 0 0 160-160 0 0-16-48 0 0 16zM480 96L160 96l0 320 320 0 0-320z" />
    </Icon>
);

export default BringFront;