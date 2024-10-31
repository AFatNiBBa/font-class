
import { Icon } from "../../index";

/**
 * A component that renders the `black-tie` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/black-tie?s=brands black-tie}
 * @preview ![black-tie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/black-tie.svg)
 */
const BlackTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32v448h448V32H0zm316.5 325.2L224 445.9l-92.5-88.7 64.5-184-64.5-86.6h184.9L252 173.2l64.5 184z" />
    </Icon>
);

export default BlackTie;