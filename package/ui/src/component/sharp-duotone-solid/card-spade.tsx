
import { Icon, generic } from "../../index";

/**
 * A component that renders the `card-spade` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-spade?s=sharp-duotone-solid card-spade}
 * @preview ![card-spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/card-spade.svg)
 */
const CardSpade: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l384 0L384 0 0 0zM72 264c0-14.3 5.5-28.7 16.4-39.6c21.3-21.3 42.7-42.7 64-64c13.2-13.2 26.4-26.4 39.6-39.6c13.2 13.2 26.4 26.4 39.6 39.6c21.3 21.3 42.7 42.7 64 64C306.5 235.3 312 249.7 312 264s-5.5 28.7-16.4 39.6c-21.9 21.9-57.3 21.9-79.2 0c-2.8-2.8-5.6-5.6-8.4-8.4l0 40.8 16 0 16 0 0 32-16 0-16 0-32 0-16 0-16 0 0-32 16 0 16 0 0-40.8c-2.8 2.8-5.6 5.6-8.4 8.4c-21.9 21.9-57.3 21.9-79.2 0C77.5 292.7 72 278.3 72 264z" />
        <path d="M231.6 160.4L192 120.8l-39.6 39.6-64 64c-21.9 21.9-21.9 57.3 0 79.2s57.3 21.9 79.2 0l8.4-8.4 0 40.8-16 0-16 0 0 32 16 0 16 0 32 0 16 0 16 0 0-32-16 0-16 0 0-40.8 8.4 8.4c21.9 21.9 57.3 21.9 79.2 0s21.9-57.3 0-79.2l-64-64z" />
    </Icon>
);

export default CardSpade;