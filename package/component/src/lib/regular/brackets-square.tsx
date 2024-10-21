
import { Icon } from "../../index";

/**
 * A component that renders the `brackets-square` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-square?s=regular brackets-square}
 * @preview ![brackets-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/brackets-square.svg)
 */
const BracketsSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M56 32C25.1 32 0 57.1 0 88L0 424c0 30.9 25.1 56 56 56l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0c-4.4 0-8-3.6-8-8L48 88c0-4.4 3.6-8 8-8l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 32zm336 0l-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0c4.4 0 8 3.6 8 8l0 336c0 4.4-3.6 8-8 8l-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0c30.9 0 56-25.1 56-56l0-336c0-30.9-25.1-56-56-56z" />
    </Icon>
);

export default BracketsSquare;