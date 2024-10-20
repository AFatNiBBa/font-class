
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-dress-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress-simple?s=duotone person-dress-simple}
 * @preview ![person-dress-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-dress-simple.svg)
 */
const PersonDressSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64z" />
        <path d="M112.3 160c-28.6 0-53.7 18.9-61.5 46.4L11.7 343.2C5.8 363.7 21.2 384 42.4 384L64 384l0 80c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-80 21.6 0c21.3 0 36.6-20.3 30.8-40.8L205.3 206.4c-7.9-27.5-33-46.4-61.5-46.4l-31.4 0z" />
    </Icon>
);

export default PersonDressSimple;