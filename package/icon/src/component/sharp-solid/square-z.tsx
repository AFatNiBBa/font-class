
import { Icon } from "../../index";

/**
 * A component that renders the `square-z` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-z?s=sharp-solid square-z}
 * @preview ![square-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-z.svg)
 */
const SquareZ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM336 160.8l-5.7 6.7L187.7 336 312 336l24 0 0 48-24 0-176 0-24 0 0-32.8 5.7-6.7L260.3 176 136 176l-24 0 0-48 24 0 176 0 24 0 0 32.8z" />
    </Icon>
);

export default SquareZ;