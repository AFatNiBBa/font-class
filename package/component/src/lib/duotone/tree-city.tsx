
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree-city` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-city?s=duotone tree-city}
 * @preview ![tree-city](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tree-city.svg)
 */
const TreeCity: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 48l0 416c0 26.5 21.5 48 48 48l96 0 160 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-24 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-40 0 0-144c0-26.5-21.5-48-48-48L336 0c-26.5 0-48 21.5-48 48zm64 32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm0 96c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm0 96c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm160 0c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm0 96c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32z" />
        <path d="M222 176c1-5 2-10 2-16c0-53-43-96-96-96c-54 0-96 43-96 96c0 6 0 11 1 16C13 190 0 214 0 240c0 45 35 80 80 80H96V480c0 18 14 32 32 32c17 0 32-14 32-32V320h16c44 0 80-35 80-80c0-26-14-50-34-64z" />
    </Icon>
);

export default TreeCity;