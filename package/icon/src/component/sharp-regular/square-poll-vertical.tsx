
import { Icon } from "../../index";

/**
 * A component that renders the `square-poll-vertical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-poll-vertical?s=sharp-regular square-poll-vertical}
 * @preview ![square-poll-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-poll-vertical.svg)
 */
const SquarePollVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM152 224l0 160-48 0 0-160 48 0zm48-96l48 0 0 256-48 0 0-256zM344 288l0 96-48 0 0-96 48 0z" />
    </Icon>
);

export default SquarePollVertical;