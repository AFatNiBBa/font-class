
import { Icon } from "../../index";

/**
 * A component that renders the `vuejs` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vuejs?s=brands vuejs}
 * @preview ![vuejs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/vuejs.svg)
 */
const Vuejs: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z" />
    </Icon>
);

export default Vuejs;