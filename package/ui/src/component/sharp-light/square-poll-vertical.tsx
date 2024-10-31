
import { Icon } from "../../index";

/**
 * A component that renders the `square-poll-vertical` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-poll-vertical?s=sharp-light square-poll-vertical}
 * @preview ![square-poll-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-poll-vertical.svg)
 */
const SquarePollVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM144 224l0 160-32 0 0-160 32 0zm64-96l32 0 0 256-32 0 0-256zM336 288l0 96-32 0 0-96 32 0z" />
    </Icon>
);

export default SquarePollVertical;