
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-curly` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-curly?s=sharp-regular bracket-curly}
 * @preview ![bracket-curly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bracket-curly.svg)
 */
const BracketCurly: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M88 32L64 32l0 24 0 126.1L7 239l-7 7 0 19.9 7 7 57 57L64 456l0 24 24 0 112 0 24 0 0-48-24 0-88 0 0-112 0-9.9-7-7-47-47 47-47 7-7 0-9.9 0-112 88 0 24 0 0-48-24 0L88 32z" />
    </Icon>
);

export default BracketCurly;