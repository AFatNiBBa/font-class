
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-chopsticks-noodles` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-chopsticks-noodles?s=duotone bowl-chopsticks-noodles}
 * @preview ![bowl-chopsticks-noodles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bowl-chopsticks-noodles.svg)
 */
const BowlChopsticksNoodles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 109.3c0 9.8 8.8 17.3 18.5 15.8L64 118c0-11.3 0-22.7 0-34L13.1 93.6C5.5 95 0 101.6 0 109.3zm0 50.5c0 9 7.3 16.2 16.2 16.2L64 176c0-11.3 0-22.7 0-34l-48.3 1.5C7 143.8 0 151 0 159.7zM224 54l0 39L492.3 51.1c11.3-1.8 19.7-11.5 19.7-23C512 15 501.3 4.8 488.8 4.8c-1.4 0-2.9 .1-4.3 .4L224 54zm0 83l0 39 264.4 0c13 0 23.6-10.6 23.6-23.6c0-13.3-11-24-24.4-23.6L224 137z" />
        <path d="M192 40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 184-32 0 0-168c0-13.3-10.7-24-24-24S64 42.7 64 56l0 168-30.4 0C15.4 224 .9 239.3 2 257.5c5.4 91.7 59.7 169.7 136.4 209.7l1.2 9.7c2.5 20 19.5 35 39.7 35l153.4 0c20.2 0 37.2-15 39.7-35l1.2-9.7c76.8-40 131-118 136.4-209.7c1.1-18.2-13.4-33.5-31.6-33.5L192 224l0-184z" />
    </Icon>
);

export default BowlChopsticksNoodles;