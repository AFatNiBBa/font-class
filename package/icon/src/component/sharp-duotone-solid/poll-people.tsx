
import { Icon, generic } from "../../index";

/**
 * A component that renders the `poll-people` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poll-people?s=sharp-duotone-solid poll-people}
 * @preview ![poll-people](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/poll-people.svg)
 */
const PollPeople: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 320l0 64 192 0 0 32-192 0 0 64 192 0 64 0 0-64 0-32 0-64-64 0-192 0zM480 32l0 64 96 0 0 32-96 0 0 64 96 0 64 0 0-64 0-32 0-64-64 0-96 0z" />
        <path d="M128 48A48 48 0 1 0 32 48a48 48 0 1 0 96 0zM480 32L224 32l0 160 256 0 0-160zM384 320l-160 0 0 160 160 0 0-160zM160 224l-32-96-96 0L0 224l160 0zM128 336a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm32 176l-32-96-96 0L0 512l160 0z" />
    </Icon>
);

export default PollPeople;