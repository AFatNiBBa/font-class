
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lightbulb-message` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-message?s=duotone lightbulb-message}
 * @preview ![lightbulb-message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lightbulb-message.svg)
 */
const LightbulbMessage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c19.8 27.1 39.7 54.4 49.2 86.2l144 0 0-96c0-35.3 28.7-64 64-64l41.4 0c4.3-15.3 6.6-31.4 6.6-48C368 78.8 289.2 0 192 0S16 78.8 16 176zm64 0c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16zm32 240l0 16c0 44.2 35.8 80 80 80c36.4 0 67.1-24.3 76.8-57.6c-8-10.7-12.8-24-12.8-38.4l-144 0z" />
        <path d="M576 288c0-17.7-14.3-32-32-32l-224 0c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l73.4 0 59.3 59.3c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-48 64 0c17.7 0 32-14.3 32-32l0-128z" />
    </Icon>
);

export default LightbulbMessage;