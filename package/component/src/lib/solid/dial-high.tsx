
import { Icon } from "../../index";

/**
 * A component that renders the `dial-high` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-high?s=solid dial-high}
 * @preview ![dial-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dial-high.svg)
 */
const DialHigh: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm.4 127.6c80.2 0 146.6 59 158.2 136l-158.2 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l158.2 0c-11.6 77-78 136-158.2 136c-88.4 0-160-71.6-160-160s71.6-160 160-160zM512 288a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 96a32 32 0 1 1 64 0A32 32 0 1 1 64 96zM480 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 480a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default DialHigh;