
import { Icon } from "../../index";

/**
 * A component that renders the `square-poll-vertical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-poll-vertical?s=sharp-solid square-poll-vertical}
 * @preview ![square-poll-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-poll-vertical.svg)
 */
const SquarePollVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM160 224l0 160-64 0 0-160 64 0zm32-96l64 0 0 256-64 0 0-256zM352 288l0 96-64 0 0-96 64 0z" />
    </Icon>
);

export default SquarePollVertical;