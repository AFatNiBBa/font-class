
import { Icon } from "../../index";

/**
 * A component that renders the `house-circle-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-circle-check?s=sharp-light house-circle-check}
 * @preview ![house-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/house-circle-check.svg)
 */
const HouseCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 2.7L298.6 12 502.7 192.1c-2.2-.1-4.5-.1-6.7-.1c-12.8 0-25.3 1.4-37.3 4L288 45.3 96 214.7 96 480l112 0 0-176 0-16 16 0 115.2 0c-5.2 10.1-9.4 20.8-12.6 32L240 320l0 160 16 0 104.2 0c10 12.1 21.7 22.9 34.6 32L80 512l-16 0 0-16 0-253L26.6 276 5.4 252l272-240L288 2.7zM496 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm78.6 112l-11.3 11.3-72 72L480 430.6l-11.3-11.3-40-40L417.4 368 440 345.4l11.3 11.3L480 385.4l60.7-60.7L552 313.4 574.6 336z" />
    </Icon>
);

export default HouseCircleCheck;