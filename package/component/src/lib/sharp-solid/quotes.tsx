
import { Icon } from "../../index";

/**
 * A component that renders the `quotes` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/quotes?s=sharp-solid quotes}
 * @preview ![quotes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/quotes.svg)
 */
const Quotes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M88 0C39.4 0 0 39.4 0 88l0 8 0 72 0 72 144 0 0-144L64 96l0-8c0-13.3 10.7-24 24-24l8 0 32 0 0-64L96 0 88 0zM264 0c-48.6 0-88 39.4-88 88l0 8 0 72 0 72 144 0 0-144-80 0 0-8c0-13.3 10.7-24 24-24l8 0 32 0 0-64L272 0l-8 0zM488 512c48.6 0 88-39.4 88-88l0-8 0-72 0-72-144 0 0 144 80 0 0 8c0 13.3-10.7 24-24 24l-8 0-32 0 0 64 32 0 8 0zm-176 0c48.6 0 88-39.4 88-88l0-8 0-72 0-72-144 0 0 144 80 0 0 8c0 13.3-10.7 24-24 24l-8 0-32 0 0 64 32 0 8 0z" />
    </Icon>
);

export default Quotes;