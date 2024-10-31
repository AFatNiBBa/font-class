
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-skating` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-skating?s=duotone person-skating}
 * @preview ![person-skating](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-skating.svg)
 */
const PersonSkating: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 400c0 4.1 1.6 8.2 4.7 11.3l59.6 59.6c17 17 43.1 21.3 64.6 10.5l6.2-3.1c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2l-6.2 3.1c-9.2 4.6-20.4 2.8-27.7-4.5L27.3 388.7c-3.1-3.1-7.2-4.7-11.3-4.7s-8.2 1.6-11.3 4.7S0 395.9 0 400zm256 96c0 8.8 7.2 16 16 16l88.8 0c25.7 0 48.1-17.5 54.3-42.4l.4-1.7c.3-1.3 .5-2.6 .5-3.9c0-7.2-4.9-13.7-12.1-15.5c-8.6-2.1-17.3 3.1-19.4 11.6l-.4 1.7c-2.7 10.7-12.3 18.2-23.3 18.2L272 480c-8.8 0-16 7.2-16 16z" />
        <path d="M352 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM128 128c0-17.7 14.3-32 32-32l159.4 0c43.6 0 64.6 53.4 32.8 83.1l-74.4 69.4 60.2 60.2c9 9 14.1 21.2 14.1 33.9l0 73.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-66.7-77.9-77.8c-26.6-26.6-24.6-70.3 4.3-94.4l20.4-17L160 160c-17.7 0-32-14.3-32-32zM81.4 353.4l86.9-86.9c4.6 10 11 19.3 19.3 27.5l21.8 21.8-82.7 82.7c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3z" />
    </Icon>
);

export default PersonSkating;