
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-envelope` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-envelope?s=sharp-duotone-solid square-envelope}
 * @preview ![square-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-envelope.svg)
 */
const SquareEnvelope: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM64 144l320 0 0 33.4L224 277.1 64 177.4 64 144zm0 71.1l151.5 94.5 8.5 5.3 8.5-5.3L384 215.1 384 368 64 368l0-152.9z" />
        <path d="M384 144L64 144l0 33.4 160 99.7 160-99.7 0-33.4zm0 71.1L232.5 309.6l-8.5 5.3-8.5-5.3L64 215.1 64 368l320 0 0-152.9z" />
    </Icon>
);

export default SquareEnvelope;