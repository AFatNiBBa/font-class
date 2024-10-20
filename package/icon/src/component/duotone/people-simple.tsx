
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-simple?s=duotone people-simple}
 * @preview ![people-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/people-simple.svg)
 */
const PeopleSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64zm256 0a64 64 0 1 0 128 0A64 64 0 1 0 320 64z" />
        <path d="M25.9 233.4C29.3 191.9 64 160 105.6 160l44.8 0c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6L192 464c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-115.7c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zm280.9-26.9c7.8-27.5 33-46.4 61.5-46.4l31.4 0c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8L448 384l0 80c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-80-21.6 0c-21.3 0-36.6-20.3-30.8-40.8l39.1-136.8z" />
    </Icon>
);

export default PeopleSimple;