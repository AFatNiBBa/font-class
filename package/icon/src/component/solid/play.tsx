
import { Icon } from "../../index";

/**
 * A component that renders the `play` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play?s=solid play}
 * @preview ![play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/play.svg)
 */
const Play: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
    </Icon>
);

export default Play;