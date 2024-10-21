
import { Icon } from "../../index";

/**
 * A component that renders the `person-dress-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress-simple?s=light person-dress-simple}
 * @preview ![person-dress-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/person-dress-simple.svg)
 */
const PersonDressSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M160 64A32 32 0 1 0 96 64a32 32 0 1 0 64 0zM64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM81.5 215.2L42.4 352l171.2 0L174.5 215.2C170.6 201.5 158 192 143.7 192l-31.4 0c-14.3 0-26.8 9.5-30.8 23.2zm-30.8-8.8c7.8-27.5 33-46.4 61.5-46.4l31.4 0c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8L192 384l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112-64 0 0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112-21.6 0c-21.3 0-36.6-20.3-30.8-40.8L50.7 206.4z" />
    </Icon>
);

export default PersonDressSimple;