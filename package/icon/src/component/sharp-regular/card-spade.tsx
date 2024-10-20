
import { Icon } from "../../index";

/**
 * A component that renders the `card-spade` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-spade?s=sharp-regular card-spade}
 * @preview ![card-spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/card-spade.svg)
 */
const CardSpade: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l0 416 288 0 0-416L48 48zM0 0L48 0 336 0l48 0 0 48 0 416 0 48-48 0L48 512 0 512l0-48L0 48 0 0zM192 120.8l39.6 39.6 64 64c21.9 21.9 21.9 57.3 0 79.2s-57.3 21.9-79.2 0l-8.4-8.4 0 40.8 16 0 16 0 0 32-16 0-16 0-32 0-16 0-16 0 0-32 16 0 16 0 0-40.8-8.4 8.4c-21.9 21.9-57.3 21.9-79.2 0s-21.9-57.3 0-79.2l64-64L192 120.8z" />
    </Icon>
);

export default CardSpade;