
import { Icon } from "../../index";

/**
 * A component that renders the `square-envelope` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-envelope?s=sharp-solid square-envelope}
 * @preview ![square-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-envelope.svg)
 */
const SquareEnvelope: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM64 144l320 0 0 33.4L224 277.1 64 177.4 64 144zM232.5 309.6L384 215.1 384 368 64 368l0-152.9 151.5 94.5 8.5 5.3 8.5-5.3z" />
    </Icon>
);

export default SquareEnvelope;