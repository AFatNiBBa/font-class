
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-7` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-7?s=duotone square-7}
 * @preview ![square-7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-7.svg)
 */
const Square_7: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm128 56c0-13.3 10.7-24 24-24l144 0c8.4 0 16.3 4.4 20.6 11.7s4.5 16.2 .5 23.7c-37.3 69.3-74.7 138.7-112 208c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l93-172.6L152 176c-13.3 0-24-10.7-24-24z" />
        <path d="M128 152c0-13.3 10.7-24 24-24l144 0c8.4 0 16.3 4.4 20.6 11.7s4.5 16.2 .5 23.7l-112 208c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l93-172.6L152 176c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Square_7;