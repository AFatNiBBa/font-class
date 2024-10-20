
import { Icon } from "../../index";

/**
 * A component that renders the `wrench-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench-simple?s=sharp-solid wrench-simple}
 * @preview ![wrench-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/wrench-simple.svg)
 */
const WrenchSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 160l64 64 64-64L256 0c74.6 26.4 128 92.4 128 176c0 71.1-38.6 133.1-96 166.3L288 512 96 512l0-169.7C38.6 309.1 0 247.1 0 176C0 92.4 53.4 26.4 128 0l0 160z" />
    </Icon>
);

export default WrenchSimple;