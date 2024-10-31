
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cup-straw` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cup-straw?s=duotone cup-straw}
 * @preview ![cup-straw](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cup-straw.svg)
 */
const CupStraw: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 192L59.7 468.8c2.5 24.5 23.1 43.2 47.8 43.2l169.1 0c24.7 0 45.3-18.7 47.8-43.2L352 192 32 192z" />
        <path d="M249.3 0c-26 0-48.6 17.9-54.5 43.2l-20 84.8L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-127.8 0 17.4-73.8c.9-3.6 4.1-6.2 7.8-6.2L280 48c13.3 0 24-10.7 24-24s-10.7-24-24-24L249.3 0z" />
    </Icon>
);

export default CupStraw;