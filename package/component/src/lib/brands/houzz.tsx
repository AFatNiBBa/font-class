
import { Icon } from "../../index";

/**
 * A component that renders the `houzz` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/houzz?s=brands houzz}
 * @preview ![houzz](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/houzz.svg)
 */
const Houzz: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z" />
    </Icon>
);

export default Houzz;