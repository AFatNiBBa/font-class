
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-curly` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-curly?s=sharp-solid bracket-curly}
 * @preview ![bracket-curly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bracket-curly.svg)
 */
const BracketCurly: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M96 32L64 32l0 32 0 114.7L9.4 233.4 0 242.7l0 26.5 9.4 9.4L64 333.3 64 448l0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-96 0-13.3-9.4-9.4L77.3 256l41.4-41.4 9.4-9.4 0-13.3 0-96 64 0 32 0 0-64-32 0L96 32z" />
    </Icon>
);

export default BracketCurly;