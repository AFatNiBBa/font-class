
import { Icon } from "../../index";

/**
 * A component that renders the `turn-up` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-up?s=solid turn-up}
 * @preview ![turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/turn-up.svg)
 */
const TurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M350 177.5c3.8-8.8 2-19-4.6-26l-136-144C204.9 2.7 198.6 0 192 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26s12.5 14.5 22 14.5l88 0 0 192c0 17.7-14.3 32-32 32l-80 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l80 0c70.7 0 128-57.3 128-128l0-192 88 0c9.6 0 18.2-5.7 22-14.5z" />
    </Icon>
);

export default TurnUp;