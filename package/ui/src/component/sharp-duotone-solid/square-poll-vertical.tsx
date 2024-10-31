
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-poll-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-poll-vertical?s=sharp-duotone-solid square-poll-vertical}
 * @preview ![square-poll-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-poll-vertical.svg)
 */
const SquarePollVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 224l64 0 0 160-64 0 0-160zm96-96l64 0 0 256-64 0 0-256zm96 160l64 0 0 96-64 0 0-96z" />
        <path d="M192 128l64 0 0 256-64 0 0-256zM96 224l64 0 0 160-64 0 0-160zm256 64l0 96-64 0 0-96 64 0z" />
    </Icon>
);

export default SquarePollVertical;