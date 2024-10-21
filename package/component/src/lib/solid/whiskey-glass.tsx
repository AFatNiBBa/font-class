
import { Icon } from "../../index";

/**
 * A component that renders the `whiskey-glass` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass?s=solid whiskey-glass}
 * @preview ![whiskey-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/whiskey-glass.svg)
 */
const WhiskeyGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32c-9.3 0-18.1 4-24.2 11.1S-1 59.4 .3 68.6l50 342.9c5.7 39.3 39.4 68.5 79.2 68.5l253 0c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32L32 32zM87.7 224L69 96l374 0L424.3 224 87.7 224z" />
    </Icon>
);

export default WhiskeyGlass;