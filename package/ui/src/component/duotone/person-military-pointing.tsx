
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-military-pointing` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-military-pointing?s=duotone person-military-pointing}
 * @preview ![person-military-pointing](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-military-pointing.svg)
 */
const PersonMilitaryPointing: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M224 393.4L386.8 230.5c10.9 3.5 21.2 8.3 30.9 14.4L246.6 416 416 416l0 32-192 0 0-54.6zM240 112c0-11.4 2.4-22.2 6.7-32l146.7 0c4.3 9.8 6.7 20.6 6.7 32c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
        <path d="M237.8 28.5c-12.6 2-21.8 12.9-21.8 25.6C216 68.4 227.6 80 241.9 80L400 80c8.8 0 16-7.2 16-16l0-45.2c0-9.8-8.8-17.4-18.5-15.8L237.8 28.5zM345.2 224L240 224 72 224c-22.1 0-40 17.9-40 40s17.9 40 40 40l152 0 0 89.4L386.8 230.5c-13.3-4.3-27.3-6.5-41.6-6.5zM224 480c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32-192 0 0 32zm22.6-64L416 416l0-46.3 53.6 90.7c11.2 19 35.8 25.3 54.8 14.1s25.3-35.8 14.1-54.8L462.3 290.8c-11.2-18.9-26.6-34.5-44.6-45.9L246.6 416z" />
    </Icon>
);

export default PersonMilitaryPointing;