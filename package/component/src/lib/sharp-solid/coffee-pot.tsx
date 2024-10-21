
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-pot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-pot?s=sharp-solid coffee-pot}
 * @preview ![coffee-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/coffee-pot.svg)
 */
const CoffeePot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32L0 32 0 64 0 192l0 32 64 0 0-32 0-96 53.3 0 27.8 83.3C96 214 64 271.3 64 336l0 8c0 80 72 136 72 136l304 0s72-56 72-136l0-8c0-64.7-32-122-81.1-156.7L480 32 224 32l-32 0L96 32 32 32zM194 224l188 0c34.9 19.4 59.8 54.6 65 96l-318 0c5.2-41.4 30.1-76.6 65-96z" />
    </Icon>
);

export default CoffeePot;