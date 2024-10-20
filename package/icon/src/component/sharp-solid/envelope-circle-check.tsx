
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-circle-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-circle-check?s=sharp-solid envelope-circle-check}
 * @preview ![envelope-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/envelope-circle-check.svg)
 */
const EnvelopeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 64l0 80L256 320l78.4-53.9c26.1-60.2 84.9-103 154.1-105.9L512 144l0-80L0 64zM274.1 346.4L256 358.8l-18.1-12.5L0 182.8 0 448l360.2 0C335.1 417.6 320 378.5 320 336c0-7.5 .5-14.9 1.4-22.1l-47.2 32.5zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-65.4-32l-11.3 11.3-72 72L480 398.6l-11.3-11.3-40-40L417.4 336 440 313.4l11.3 11.3L480 353.4l60.7-60.7L552 281.4 574.6 304z" />
    </Icon>
);

export default EnvelopeCircleCheck;