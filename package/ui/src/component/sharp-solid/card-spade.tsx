
import { Icon } from "../../index";

/**
 * A component that renders the `card-spade` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-spade?s=sharp-solid card-spade}
 * @preview ![card-spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/card-spade.svg)
 */
const CardSpade: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L0 0 0 512l384 0L384 0zM192 120.8l39.6 39.6 64 64c21.9 21.9 21.9 57.3 0 79.2s-57.3 21.9-79.2 0l-8.4-8.4 0 40.8 16 0 16 0 0 32-16 0-16 0-32 0-16 0-16 0 0-32 16 0 16 0 0-40.8-8.4 8.4c-21.9 21.9-57.3 21.9-79.2 0s-21.9-57.3 0-79.2l64-64L192 120.8z" />
    </Icon>
);

export default CardSpade;