
import { Icon } from "../../index";

/**
 * A component that renders the `7` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/7?s=solid 7}
 * @preview ![7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/7.svg)
 */
const $7: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 64C0 46.3 14.3 32 32 32l256 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-224 384c-8.9 15.3-28.5 20.4-43.8 11.5s-20.4-28.5-11.5-43.8L232.3 96 32 96C14.3 96 0 81.7 0 64z" />
    </Icon>
);

export default $7;