
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-dress-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-dress-simple?s=duotone people-dress-simple}
 * @preview ![people-dress-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/people-dress-simple.svg)
 */
const PeopleDressSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64zm256 0a64 64 0 1 0 128 0A64 64 0 1 0 320 64z" />
        <path d="M50.7 206.4c7.8-27.5 33-46.4 61.5-46.4l31.4 0c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8L192 384l0 80c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-80-21.6 0c-21.3 0-36.6-20.3-30.8-40.8L50.7 206.4zm256 0c7.9-27.5 33-46.4 61.5-46.4l31.4 0c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8L448 384l0 80c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-80-21.6 0c-21.3 0-36.6-20.3-30.8-40.8l39.1-136.8z" />
    </Icon>
);

export default PeopleDressSimple;