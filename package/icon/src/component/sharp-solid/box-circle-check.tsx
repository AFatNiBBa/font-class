
import { Icon } from "../../index";

/**
 * A component that renders the `box-circle-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-circle-check?s=sharp-solid box-circle-check}
 * @preview ![box-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/box-circle-check.svg)
 */
const BoxCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M208 32l0 128L0 160 64 32l144 0zm32 0l144 0 64 128-32 0-176 0 0-128zM0 480L0 192l416 0 0 .7c-89.7 8.1-160 83.5-160 175.3c0 42.5 15.1 81.6 40.2 112L0 480zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm222.6-32L488 313.4l-11.3 11.3L416 385.4l-28.7-28.7L376 345.4 353.4 368l11.3 11.3 40 40L416 430.6l11.3-11.3 72-72L510.6 336z" />
    </Icon>
);

export default BoxCircleCheck;