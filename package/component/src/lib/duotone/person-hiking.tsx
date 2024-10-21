
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-hiking` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-hiking?s=duotone person-hiking}
 * @preview ![person-hiking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-hiking.svg)
 */
const PersonHiking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M7 246.4c-3.7 13.7 5.2 27.7 19.2 30l47.9 8c12.3 2.1 24.2-5.7 27.2-17.9l35.2-140.7c3.8-15.1-7.7-29.8-23.3-29.8l-4.2 0C73 96 41.4 120.1 31.9 155L7 246.4zM336 184l0 24 16 0c.5 0 1.1 0 1.6 0s1.1 .1 1.6 .1c1.1 .1 2.1 .3 3.2 .5c2.1 .4 4.1 1 6 1.8c3.8 1.6 7.3 3.9 10.1 6.8s5.2 6.3 6.9 10.1c.2 .5 .4 1 .6 1.4s.3 1 .5 1.5c.3 1 .6 2 .8 3c.2 1 .4 2.1 .5 3.2c.1 .6 .1 1.1 .1 1.6c0 .5 0 1 .1 1.5c0-18.4 0-37 0-55.6c0-13.3-10.7-24-24-24s-24 10.7-24 24zm0 88l0 216c0 13.3 10.7 24 24 24s24-10.7 24-24l0-247.7c0 .6 0 1.1-.1 1.6c0 .5-.1 1.1-.1 1.6c-.1 1.1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.2-6.9 10.1c-5.8 5.7-13.7 9.3-22.5 9.3l-16 0z" />
        <path d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9l0 89.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208l46.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-55.4 0c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1z" />
    </Icon>
);

export default PersonHiking;