
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-circle-check?s=sharp-duotone-solid box-circle-check}
 * @preview ![box-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/box-circle-check.svg)
 */
const BoxCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l208 0 0-128L64 32 0 160zm0 32L0 480l296.2 0C271.1 449.6 256 410.5 256 368c0-91.8 70.3-167.2 160-175.3l0-.7L0 192zM240 32l0 128 176 0 32 0L384 32 240 32z" />
        <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72L416 430.6l-11.3-11.3-40-40L353.4 368 376 345.4l11.3 11.3L416 385.4l60.7-60.7L488 313.4 510.6 336l-11.3 11.3z" />
    </Icon>
);

export default BoxCircleCheck;