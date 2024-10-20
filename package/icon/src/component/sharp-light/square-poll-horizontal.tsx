
import { Icon } from "../../index";

/**
 * A component that renders the `square-poll-horizontal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-poll-horizontal?s=sharp-light square-poll-horizontal}
 * @preview ![square-poll-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-poll-horizontal.svg)
 */
const SquarePollHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64L32 64l0 384 384 0 0-384zm32-32l0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0 384 0 32 0zM256 176L96 176l0-32 160 0 0 32zm96 64l0 32L96 272l0-32 256 0zM192 368l-96 0 0-32 96 0 0 32z" />
    </Icon>
);

export default SquarePollHorizontal;