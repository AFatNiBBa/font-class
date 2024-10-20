
import { Icon } from "../../index";

/**
 * A component that renders the `brackets-square` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-square?s=light brackets-square}
 * @preview ![brackets-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/brackets-square.svg)
 */
const BracketsSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16-7.2-16-16L32 80c0-8.8 7.2-16 16-16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L48 32zm352 0l-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16 7.2 16 16l0 352c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48z" />
    </Icon>
);

export default BracketsSquare;