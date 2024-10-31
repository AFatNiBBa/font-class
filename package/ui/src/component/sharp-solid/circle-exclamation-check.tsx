
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation-check?s=sharp-solid circle-exclamation-check}
 * @preview ![circle-exclamation-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-exclamation-check.svg)
 */
const CircleExclamationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M506.5 203L480 229.5l-18.7-18.7L416 165.5 325.5 256l45.3 45.3 64 64 33.7 33.7C422.4 467.1 344.5 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0C379.2 0 482.1 87 506.5 203zM280 152l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zM232 320l0 48 48 0 0-48-48 0zM617 209L489 337l-17 17-17-17-64-64-17-17L408 222.1l17 17 47 47L583 175l17-17L633.9 192l-17 17z" />
    </Icon>
);

export default CircleExclamationCheck;