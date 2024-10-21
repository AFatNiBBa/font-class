
import { Icon } from "../../index";

/**
 * A component that renders the `donut` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/donut?s=sharp-solid donut}
 * @preview ![donut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/donut.svg)
 */
const Donut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 208C0 119.6 114.6 48 256 48s256 71.6 256 160l0 24 0 16 0 22.1-55.2 27.6-2.3 1.2-1.8 1.8-44 44-74.3 7.4-1.5 .2-1.5 .4L256 375.3l-75.4-22.6-1.5-.4-1.5-.2-74.3-7.4-44-44-1.8-1.8-2.3-1.2L0 270.1 0 248l0-16 0-24zm0 97.9l38.5 19.3 46.2 46.2 4 4 5.7 .6 78.5 7.8 78.5 23.6 4.6 1.4 4.6-1.4 78.5-23.6 78.5-7.8 5.7-.6 4-4 46.2-46.2L512 305.9C510.4 393.4 396.4 464 256 464S1.6 393.4 0 305.9zM283.3 107.3L294.6 96 272 73.4 260.7 84.7l-16 16L233.4 112 256 134.6l11.3-11.3 16-16zm-112 16L182.6 112 160 89.4l-11.3 11.3-32 32L105.4 144 128 166.6l11.3-11.3 32-32zm224 9.4L384 121.4 361.4 144l11.3 11.3 32 32L416 198.6 438.6 176l-11.3-11.3-32-32zM64 192l-16 0 0 32 16 0 32 0 16 0 0-32-16 0-32 0zm331.3 36.7L384 217.4 361.4 240l11.3 11.3 32 32L416 294.6 438.6 272l-11.3-11.3-32-32zm-240 16L144 233.4 121.4 256l11.3 11.3 32 32L176 310.6 198.6 288l-11.3-11.3-32-32zm176 38.6L342.6 272 320 249.4l-11.3 11.3-32 32L265.4 304 288 326.6l11.3-11.3 32-32zM320 192c0-17.7-28.7-32-64-32s-64 14.3-64 32s28.7 32 64 32s64-14.3 64-32z" />
    </Icon>
);

export default Donut;