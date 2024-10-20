
import { Icon } from "../../index";

/**
 * A component that renders the `square-poll-horizontal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-poll-horizontal?s=sharp-regular square-poll-horizontal}
 * @preview ![square-poll-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-poll-horizontal.svg)
 */
const SquarePollHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM256 184L96 184l0-48 160 0 0 48zm96 48l0 48L96 280l0-48 256 0zM192 376l-96 0 0-48 96 0 0 48z" />
    </Icon>
);

export default SquarePollHorizontal;