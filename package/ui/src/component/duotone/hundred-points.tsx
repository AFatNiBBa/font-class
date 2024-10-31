
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hundred-points` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hundred-points?s=duotone hundred-points}
 * @preview ![hundred-points](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hundred-points.svg)
 */
const HundredPoints: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384c0 1.5 .1 3 .3 4.6C2.8 406 19 418.2 36.5 415.7l448-64c17.5-2.5 29.7-18.7 27.2-36.2c-2.3-16-16-27.5-31.6-27.5c-1.5 0-3 .1-4.6 .3l-448 64C11.5 354.6 0 368.3 0 384zm224.3 68.6c2.5 17.5 18.7 29.7 36.2 27.2l224-32c17.5-2.5 29.7-18.7 27.2-36.2s-18.7-29.7-36.2-27.2l-224 32c-17.5 2.5-29.7 18.7-27.2 36.2z" />
        <path d="M163 101.8C168 61.9 201.9 32 242 32c47.9 0 85 42 79 89.5L309 218.2c-5 39.8-38.9 69.8-79 69.8c-47.9 0-85-42-79-89.5L163 101.8zM242 96c-7.9 0-14.5 5.9-15.5 13.7l-12.1 96.7c-1.2 9.3 6.1 17.6 15.5 17.6c7.9 0 14.5-5.9 15.5-13.7l12.1-96.7c1.2-9.3-6.1-17.6-15.5-17.6zM123.5 38.3c9.2 6.9 13.8 18.2 12.2 29.7l-32 224c-2.5 17.5-18.7 30-36.2 27.7S37.8 301.5 40.3 284L64.3 116.5l-19.7 8.7c-16.2 7.2-35.1 0-42-16.1s.6-35.1 16.8-42.3l72-32c10.6-4.7 22.9-3.4 32.1 3.5zM427.7 32c46.9 0 83.7 40.3 79.5 87l-7.3 80.4c-3.7 41.1-38.2 72.6-79.5 72.6c-46.9 0-83.7-40.3-79.5-87l7.3-80.4C351.9 63.5 386.4 32 427.7 32zm-15.7 78.4l-7.3 80.4c-.8 9.3 6.4 17.2 15.7 17.2c8.2 0 15-6.2 15.7-14.4l7.3-80.4c.8-9.3-6.4-17.2-15.7-17.2c-8.2 0-15 6.2-15.7 14.4z" />
    </Icon>
);

export default HundredPoints;