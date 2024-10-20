
import { Icon } from "../../index";

/**
 * A component that renders the `lightbulb-message` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-message?s=sharp-solid lightbulb-message}
 * @preview ![lightbulb-message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lightbulb-message.svg)
 */
const LightbulbMessage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 224l0 160-144 0c-9.6-31.9-29.5-59.1-49.2-86.2c0 0 0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 16.6-2.3 32.7-6.6 48L256 224zM112 416l144 0 0 96-144 0 0-96zm0-240c0-44.2 35.8-80 80-80l0-32C130.1 64 80 114.1 80 176l32 0zm464 80l0 192-96 0 0 64-74.7-64L288 448l0-192 288 0z" />
    </Icon>
);

export default LightbulbMessage;