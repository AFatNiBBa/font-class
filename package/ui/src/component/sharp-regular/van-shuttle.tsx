
import { Icon } from "../../index";

/**
 * A component that renders the `van-shuttle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/van-shuttle?s=sharp-regular van-shuttle}
 * @preview ![van-shuttle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/van-shuttle.svg)
 */
const VanShuttle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 32L0 32 0 56 0 360l0 24 24 0 40 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l40 0 24 0 0-24 0-144 0-8.8-5.7-6.7-136-160L491.1 32 480 32 360 32 200 32 24 32zM480 288c-35.5 0-66.6 19.3-83.2 48l-153.7 0c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48L48 336l0-96 152 0 160 0 232 0 0 96-28.8 0c-16.6-28.7-47.6-48-83.2-48zM48 192L48 80l128 0 0 112L48 192zm176 0l0-112 112 0 0 112-112 0zm160 0l0-112 84.9 0 95.2 112L384 192zm48 192a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default VanShuttle;