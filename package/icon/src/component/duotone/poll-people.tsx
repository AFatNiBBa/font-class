
import { Icon, generic } from "../../index";

/**
 * A component that renders the `poll-people` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poll-people?s=duotone poll-people}
 * @preview ![poll-people](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/poll-people.svg)
 */
const PollPeople: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M384 320l0 64 192 0 0 32-192 0 0 64 208 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-208 0zM480 32l0 64 96 0 0 32-96 0 0 64 112 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L480 32z" />
        <path d="M80 96A48 48 0 1 0 80 0a48 48 0 1 0 0 96zM64 128c-35.3 0-64 28.7-64 64c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-32 0zm64 208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM64 416c-35.3 0-64 28.7-64 64c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64l-32 0zM224 80c0-26.5 21.5-48 48-48H480V192H272c-26.5 0-48-21.5-48-48V80zm0 288c0-26.5 21.5-48 48-48H384V480H272c-26.5 0-48-21.5-48-48V368z" />
    </Icon>
);

export default PollPeople;