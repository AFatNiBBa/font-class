
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-pot` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-pot?s=sharp-light coffee-pot}
 * @preview ![coffee-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/coffee-pot.svg)
 */
const CoffeePot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l16 0 80 0 32 0 16 0 301.9 0L480 32 468.4 64l-41 112.8C478.4 211.3 512 269.7 512 336l0 8c0 80-72 136-72 136l-304 0s-72-56-72-136l0-8c0-65.4 32.7-123.2 82.7-157.9L96 64 32 64l0 144 0 16L0 224l0-16L0 48 0 32zM180.8 176l212.8 0L434.3 64 144 64l-13 0 49.8 112zM416 208l-256 0s0 0 0 0c-26.4 19.9-46.5 47.7-56.7 80l369.4 0c-10.1-32.3-30.2-60.1-56.7-80c0 0 0 0 0 0zm63.2 112L96.8 320c-.5 5.3-.8 10.6-.8 16l0 8c0 30.4 13.8 57.7 29.6 78.8c7.8 10.3 15.5 18.6 21.3 24.2l1.1 1L428 448l1.1-1c5.8-5.6 13.6-13.8 21.3-24.2C466.2 401.7 480 374.4 480 344l0-8c0-5.4-.3-10.7-.8-16z" />
    </Icon>
);

export default CoffeePot;