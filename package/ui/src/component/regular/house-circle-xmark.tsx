
import { Icon } from "../../index";

/**
 * A component that renders the `house-circle-xmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-circle-xmark?s=regular house-circle-xmark}
 * @preview ![house-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/house-circle-xmark.svg)
 */
const HouseCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M303.5 5.7c-9-7.6-22.1-7.6-31.1 0l-264 224c-10.1 8.6-11.3 23.7-2.8 33.8s23.7 11.3 33.8 2.8L64 245.5 64 432c0 44.2 35.8 80 80 80l250.8 0c-18.3-12.9-34.1-29.2-46.3-48L336 464s0 0 0 0l-96 0 0-144 86.6 0c4.8-17.1 12.2-33.2 21.7-47.8c-1.4-.2-2.9-.2-4.3-.2l-112 0c-22.1 0-40 17.9-40 40l0 152-48 0c-17.7 0-32-14.3-32-32l0-227.2L288 55.5 454.7 196.9c13.3-3.2 27.1-4.9 41.3-4.9c10.3 0 20.3 .9 30.1 2.6L303.5 5.7zM496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm22.6-144l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L496 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L473.4 368l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L496 345.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L518.6 368z" />
    </Icon>
);

export default HouseCircleXmark;