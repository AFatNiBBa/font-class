
import { Icon } from "../../index";

/**
 * A component that renders the `square-poll-horizontal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-poll-horizontal?s=sharp-solid square-poll-horizontal}
 * @preview ![square-poll-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-poll-horizontal.svg)
 */
const SquarePollHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM256 192L96 192l0-64 160 0 0 64zm96 32l0 64L96 288l0-64 256 0zM192 384l-96 0 0-64 96 0 0 64z" />
    </Icon>
);

export default SquarePollHorizontal;