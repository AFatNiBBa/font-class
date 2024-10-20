
import { Icon } from "../../index";

/**
 * A component that renders the `poll-people` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poll-people?s=sharp-regular poll-people}
 * @preview ![poll-people](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/poll-people.svg)
 */
const PollPeople: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 48A48 48 0 1 0 32 48a48 48 0 1 0 96 0zM592 80l0 64-112 0 0-64 112 0zM272 32l-48 0 0 48 0 64 0 48 48 0 320 0 48 0 0-48 0-64 0-48-48 0L272 32zM592 368l0 64-240 0 0-64 240 0zM272 320l-48 0 0 48 0 64 0 48 48 0 320 0 48 0 0-48 0-64 0-48-48 0-320 0zM80 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM32 128L0 224l160 0-32-96-96 0zM160 512l-32-96-96 0L0 512l160 0z" />
    </Icon>
);

export default PollPeople;