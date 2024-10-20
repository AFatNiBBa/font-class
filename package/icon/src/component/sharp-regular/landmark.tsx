
import { Icon } from "../../index";

/**
 * A component that renders the `landmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark?s=sharp-regular landmark}
 * @preview ![landmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/landmark.svg)
 */
const Landmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 192l48 0 416 0 48 0 0-48L256 0 0 144l0 48zM256 55.1L414.1 144 97.9 144 256 55.1zM112 224l-48 0 0 160-8 0-24 0 0 48 24 0 400 0 24 0 0-48-24 0-8 0 0-160-48 0 0 160-64 0 0-160-48 0 0 160-64 0 0-160-48 0 0 160-64 0 0-160zM0 464l0 48 24 0 464 0 24 0 0-48-24 0L24 464 0 464z" />
    </Icon>
);

export default Landmark;