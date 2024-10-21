
import { Icon, generic } from "../../index";

/**
 * A component that renders the `golf-ball-tee` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/golf-ball-tee?s=duotone golf-ball-tee}
 * @preview ![golf-ball-tee](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/golf-ball-tee.svg)
 */
const GolfBallTee: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 66.8 34.1 125.6 85.8 160l212.3 0c51.7-34.4 85.8-93.2 85.8-160C384 86 298 0 192 0S0 86 0 192zm184.4 23.6c-3.7-3.3 .5-8.4 5.4-8.4c18.5 0 33.5-15 33.5-33.5c0-4.9 5.1-9.1 8.4-5.4c5.2 5.9 8.4 13.7 8.4 22.1c0 18.5-15 33.5-33.5 33.5c-8.5 0-16.2-3.2-22.1-8.4zm18.8 82.8c-3.7-3.3 .5-8.4 5.4-8.4c18.5 0 33.5-15 33.5-33.5c0-4.9 5.1-9.1 8.4-5.4c5.2 5.9 8.4 13.7 8.4 22.1c0 18.5-15 33.5-33.5 33.5c-8.5 0-16.2-3.2-22.1-8.4zm61.2-66.8c-3.7-3.3 .5-8.4 5.4-8.4c18.5 0 33.5-15 33.5-33.5c0-4.9 5.1-9.1 8.4-5.4c5.2 5.9 8.4 13.7 8.4 22.1c0 18.5-15 33.5-33.5 33.5c-8.5 0-16.2-3.2-22.1-8.4z" />
        <path d="M128 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0c8.8 0 16 7.2 16 16l0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16c0-8.8 7.2-16 16-16l16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-64 0z" />
    </Icon>
);

export default GolfBallTee;