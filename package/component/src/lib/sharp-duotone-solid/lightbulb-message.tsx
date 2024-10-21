
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lightbulb-message` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-message?s=sharp-duotone-solid lightbulb-message}
 * @preview ![lightbulb-message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lightbulb-message.svg)
 */
const LightbulbMessage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c19.8 27.1 39.7 54.4 49.2 86.2l144 0 0-160 105.4 0c4.3-15.3 6.6-31.4 6.6-48C368 78.8 289.2 0 192 0S16 78.8 16 176zm64 0c0-61.9 50.1-112 112-112l0 32c-44.2 0-80 35.8-80 80l-32 0zm32 240l0 96 144 0 0-96-144 0z" />
        <path d="M288 256l288 0 0 192-96 0 0 64-74.7-64L288 448l0-192z" />
    </Icon>
);

export default LightbulbMessage;