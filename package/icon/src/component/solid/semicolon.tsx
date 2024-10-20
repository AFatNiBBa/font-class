
import { Icon } from "../../index";

/**
 * A component that renders the `semicolon` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/semicolon?s=solid semicolon}
 * @preview ![semicolon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/semicolon.svg)
 */
const Semicolon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M96 64a64 64 0 1 1 0 128A64 64 0 1 1 96 64zm54.8 319L83.7 492.8C76.4 504.7 63.5 512 49.5 512C24 512 5 488.5 10.4 463.6L37.5 337c6.1-28.6 31.4-49 60.6-49c34.2 0 61.9 28.1 61.9 62.3c0 11.5-3.2 22.9-9.2 32.7z" />
    </Icon>
);

export default Semicolon;