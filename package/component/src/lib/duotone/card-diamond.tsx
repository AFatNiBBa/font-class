
import { Icon, generic } from "../../index";

/**
 * A component that renders the `card-diamond` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-diamond?s=duotone card-diamond}
 * @preview ![card-diamond](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/card-diamond.svg)
 */
const CardDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 256c0 4.1 1.6 8.2 4.7 11.3l96 96c3.1 3.1 7.2 4.7 11.3 4.7s8.2-1.6 11.3-4.7l96-96c3.1-3.1 4.7-7.2 4.7-11.3s-1.6-8.2-4.7-11.3l-96-96c-3.1-3.1-7.2-4.7-11.3-4.7s-8.2 1.6-11.3 4.7l-96 96c-3.1 3.1-4.7 7.2-4.7 11.3z" />
        <path d="M203.3 148.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0l96-96c6.2-6.2 6.2-16.4 0-22.6l-96-96z" />
    </Icon>
);

export default CardDiamond;