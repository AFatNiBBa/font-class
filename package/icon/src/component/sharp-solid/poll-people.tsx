
import { Icon } from "../../index";

/**
 * A component that renders the `poll-people` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poll-people?s=sharp-solid poll-people}
 * @preview ![poll-people](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/poll-people.svg)
 */
const PollPeople: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 48A48 48 0 1 0 32 48a48 48 0 1 0 96 0zM576 96l0 32-96 0 0-32 96 0zM288 32l-64 0 0 64 0 32 0 64 64 0 288 0 64 0 0-64 0-32 0-64-64 0L288 32zM576 384l0 32-224 0 0-32 224 0zM288 320l-64 0 0 64 0 32 0 64 64 0 288 0 64 0 0-64 0-32 0-64-64 0-288 0zM160 224l-32-96-96 0L0 224l160 0zM128 336a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm32 176l-32-96-96 0L0 512l160 0z" />
    </Icon>
);

export default PollPeople;