
import { Icon } from "../../index";

/**
 * A component that renders the `card-spade` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-spade?s=sharp-thin card-spade}
 * @preview ![card-spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/card-spade.svg)
 */
const CardSpade: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l0 480 352 0 0-480L16 16zM0 0L16 0 368 0l16 0 0 16 0 480 0 16-16 0L16 512 0 512l0-16L0 16 0 0zM192 120.9l5.7 5.7 39.6 39.6L297 225.9c25 25 25 65.5 0 90.5s-65.5 25-90.5 0l-6.5-6.5 0 56.1 24 0 8 0 0 16-8 0-24 0-16 0-24 0-8 0 0-16 8 0 24 0 0-56.1-6.5 6.5c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5l59.7-59.7 39.6-39.6 5.7-5.7zm0 22.6l-33.9 33.9L98.3 237.2c-18.7 18.7-18.7 49.1 0 67.9s49.1 18.7 67.9 0l20.1-20.1 5.7-5.7 5.7 5.7 20.1 20.1c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9l-59.7-59.7L192 143.5z" />
    </Icon>
);

export default CardSpade;