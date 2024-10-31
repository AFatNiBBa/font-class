
import { Icon } from "../../index";

/**
 * A component that renders the `road-circle-xmark` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-circle-xmark?s=light road-circle-xmark}
 * @preview ![road-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/road-circle-xmark.svg)
 */
const RoadCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M157.5 74c9.2-25.2 33.2-42 60.1-42l204.9 0c26.9 0 50.9 16.8 60.1 42l44.1 120.6c-9.9-1.7-20.2-2.7-30.6-2.7c-1.5 0-2.9 0-4.4 .1L452.5 85c-4.6-12.6-16.6-21-30.1-21L336 64l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-86.4 0c-13.4 0-25.4 8.4-30.1 21L70.6 405c-7.6 20.9 7.8 43 30.1 43l238.5 0c5.9 11.4 12.9 22.2 21 32l-259.6 0c-44.5 0-75.4-44.2-60.1-86L157.5 74zM336 208l0 86.6c-3.5 7.6-6.5 15.6-8.9 23.8c-2.1 1.1-4.6 1.7-7.1 1.7c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zM608 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm166.6 0l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L496 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L473.4 368l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L496 345.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L518.6 368z" />
    </Icon>
);

export default RoadCircleXmark;