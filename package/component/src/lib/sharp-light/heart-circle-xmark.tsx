
import { Icon } from "../../index";

/**
 * A component that renders the `heart-circle-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-circle-xmark?s=sharp-light heart-circle-xmark}
 * @preview ![heart-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/heart-circle-xmark.svg)
 */
const HeartCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 141.3l-22.6-22.6L209.1 94.4C189.7 74.9 163.3 64 135.8 64C78.5 64 32 110.5 32 167.8c0 27.5 10.9 53.9 30.4 73.4l24.2 24.2L256 434.8l9.5-9.5c3.7 10.9 8.5 21.3 14.2 31.1l-1.1 1.1L256 480l-22.6-22.6L64 288 39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8l1.6 1.6L256 96l22.6-22.6 1.6-1.6c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 13.8-2.1 27.4-6.2 40.4c-9.6-4.5-19.7-8.1-30.2-10.7c2.9-9.5 4.3-19.5 4.3-29.7C480 110.5 433.5 64 376.2 64c-27.5 0-53.9 10.9-73.4 30.4l-24.2 24.2L256 141.3zM544 368a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm203.3-36.7L454.6 368l36.7 36.7L502.6 416 480 438.6l-11.3-11.3L432 390.6l-36.7 36.7L384 438.6 361.4 416l11.3-11.3L409.4 368l-36.7-36.7L361.4 320 384 297.4l11.3 11.3L432 345.4l36.7-36.7L480 297.4 502.6 320l-11.3 11.3z" />
    </Icon>
);

export default HeartCircleXmark;