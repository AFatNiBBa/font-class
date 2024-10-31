
import { Icon } from "../../index";

/**
 * A component that renders the `people-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-simple?s=sharp-thin people-simple}
 * @preview ![people-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/people-simple.svg)
 */
const PeopleSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112A64 64 0 1 0 128 0a64 64 0 1 0 0 128zM47.3 176l161.3 0 6.7 160L192 336l-48 0-32 0-48 0-23.3 0 6.7-160zM120 352l16 0 0 152 0 8 8 0 48 0 8 0 0-8 0-152 16 0 16 0-.7-16L224 160 32 160 24.7 336 24 352l16 0 16 0 0 152 0 8 8 0 48 0 8 0 0-8 0-152zm64 144l-32 0 0-144 32 0 0 144zM104 352l0 144-32 0 0-144 32 0zM384 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112A64 64 0 1 0 384 0a64 64 0 1 0 0 128zm-51.9 48l103.9 0 54.9 192L448 368l-48 0-32 0-48 0-42.8 0 54.9-192zM376 384l16 0 0 120 0 8 8 0 48 0 8 0 0-8 0-120 39.4 0 16.6 0-4.6-16L448 160l-128 0L260.6 368 256 384l16.6 0 39.4 0 0 120 0 8 8 0 48 0 8 0 0-8 0-120zm64 112l-32 0 0-112 32 0 0 112zM360 384l0 112-32 0 0-112 32 0z" />
    </Icon>
);

export default PeopleSimple;