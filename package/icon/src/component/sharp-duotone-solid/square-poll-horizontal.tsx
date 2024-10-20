
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-poll-horizontal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-poll-horizontal?s=sharp-duotone-solid square-poll-horizontal}
 * @preview ![square-poll-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-poll-horizontal.svg)
 */
const SquarePollHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm96 96l160 0 0 64L96 192l0-64zm0 96l256 0 0 64L96 288l0-64zm0 96l96 0 0 64-96 0 0-64z" />
        <path d="M256 128l0 64L96 192l0-64 160 0zm96 96l0 64L96 288l0-64 256 0zM192 384l-96 0 0-64 96 0 0 64z" />
    </Icon>
);

export default SquarePollHorizontal;