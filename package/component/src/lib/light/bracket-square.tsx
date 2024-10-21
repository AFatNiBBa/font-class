
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=light bracket-square}
 * @preview ![bracket-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bracket-square.svg)
 */
const BracketSquare: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M0 80C0 53.5 21.5 32 48 32l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L48 64c-8.8 0-16 7.2-16 16l0 352c0 8.8 7.2 16 16 16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-26.5 0-48-21.5-48-48L0 80z" />
    </Icon>
);

export default BracketSquare;