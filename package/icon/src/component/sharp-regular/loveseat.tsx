
import { Icon } from "../../index";

/**
 * A component that renders the `loveseat` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/loveseat?s=sharp-regular loveseat}
 * @preview ![loveseat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/loveseat.svg)
 */
const Loveseat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 80l320 0 0 112 48 0 0-112 0-48-48 0L96 32 48 32l0 48 0 112 48 0L96 80zm0 192l0 160-48 0 0-160 48 0zM48 224L0 224l0 48L0 432l0 48 48 0 48 0 48 0 0-32 224 0 0 32 48 0 48 0 48 0 0-48 0-160 0-48-48 0-48 0-48 0 0 48 0 16-224 0 0-16 0-48-48 0-48 0zm96 112l224 0 0 64-224 0 0-64zm272-64l48 0 0 160-48 0 0-160z" />
    </Icon>
);

export default Loveseat;