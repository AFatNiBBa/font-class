
import { Icon } from "../../index";

/**
 * A component that renders the `club` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/club?s=regular club}
 * @preview ![club](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/club.svg)
 */
const Club: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 146.4c0-.8 0-1.6 0-2.4c0-53-43-96-96-96s-96 43-96 96c0 .8 0 1.6 0 2.4c.6 22.9-15.1 42.9-37.4 48C79.9 204.1 48 242.4 48 288c0 53 43 96 96 96c30.1 0 57-13.8 74.7-35.7c9.1-11.3 22.8-17.8 37.3-17.8s28.2 6.5 37.3 17.8C311 370.2 337.9 384 368 384c53 0 96-43 96-96c0-45.6-31.9-83.9-74.6-93.6c-22.3-5.1-37.9-25.1-37.4-48zM368 432c-27.9 0-53.9-7.9-76-21.7c-4.1-2.6-8.1-5.4-12-8.3l0 62 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-62c-3.8 3-7.8 5.8-12 8.3c-22.1 13.7-48.1 21.7-76 21.7C64.5 432 0 367.5 0 288c0-68.5 47.9-125.9 112-140.4c0-1.2 0-2.4 0-3.6C112 64.5 176.5 0 256 0s144 64.5 144 144c0 1.2 0 2.4 0 3.6c64.1 14.5 112 71.9 112 140.4c0 79.5-64.5 144-144 144z" />
    </Icon>
);

export default Club;