
import { Icon } from "../../index";

/**
 * A component that renders the `knife` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/knife?s=solid knife}
 * @preview ![knife](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/knife.svg)
 */
const Knife: typeof Icon = x => (
    <Icon {...x}>
        <path d="M217.5 249.3l242-242c4.7-4.7 11-7.3 17.6-7.3c11.2 0 21 7.5 23.5 18.4C505.3 38.6 512 71.5 512 96c0 83.3-48.2 130.5-128.9 209.4c-6.5 6.4-13.3 13-20.3 19.9c-12.1 11.9-28.4 18.7-45.3 18.7l-11 0c-17 0-33.3-6.7-45.3-18.7l-14.6-14.6-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192 16-16 .1-.1z" />
    </Icon>
);

export default Knife;