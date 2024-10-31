
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding-skull` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-skull?s=sharp-solid hand-holding-skull}
 * @preview ![hand-holding-skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hand-holding-skull.svg)
 */
const HandHoldingSkull: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M432 128C432 57.3 367.5 0 288 0S144 57.3 144 128c0 47.4 29 88.9 72.2 111L208 288l160 0-8.2-49C403 216.9 432 175.4 432 128zM240 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM140 327L68.8 384 0 384 0 512l32 0 192 0 160 0 12.4 0 10.2-7 128-88 33-22.7-45.3-65.9-33 22.7-94.5 65L256 416l0-32 32 0 64 0 32 0 0-64-32 0-64 0-64 0-64 0-11.2 0-8.8 7z" />
    </Icon>
);

export default HandHoldingSkull;