
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-terminal` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-terminal?s=thin rectangle-terminal}
 * @preview ![rectangle-terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/rectangle-terminal.svg)
 */
const RectangleTerminal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM97.9 154.8c-2.9 3.4-2.5 8.4 .9 11.3L203.7 256 98.8 345.9c-3.4 2.9-3.7 7.9-.9 11.3s7.9 3.7 11.3 .9l112-96c1.8-1.5 2.8-3.7 2.8-6.1s-1-4.6-2.8-6.1l-112-96c-3.4-2.9-8.4-2.5-11.3 .9zM200 368c-4.4 0-8 3.6-8 8s3.6 8 8 8l208 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-208 0z" />
    </Icon>
);

export default RectangleTerminal;