
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-history-circle-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-history-circle-user?s=sharp-duotone-solid rectangle-history-circle-user}
 * @preview ![rectangle-history-circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rectangle-history-circle-user.svg)
 */
const RectangleHistoryCircleUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 512l394.8 0C349.5 480.1 320 427.5 320 368c0-97.2 78.8-176 176-176c5.4 0 10.7 .2 16 .7l0-32.7L0 160zM48 80l0 48 416 0 0-48L48 80zM96 0l0 48 320 0 0-48L96 0z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-32c-31.7 0-60.3-13.2-80.7-34.3L440 416l112 0 24.7 29.7c-20.4 21.2-49 34.3-80.7 34.3zm0-192a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default RectangleHistoryCircleUser;