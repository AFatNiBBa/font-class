
import { Icon, generic } from "../../index";

/**
 * A component that renders the `webhook` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/webhook?s=sharp-duotone-solid webhook}
 * @preview ![webhook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/webhook.svg)
 */
const Webhook: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 384c0-63.6 46.3-116.3 107-126.3l7.8 47.4C76.9 311.3 48 344.3 48 384c0 44.2 35.8 80 80 80s80-35.8 80-80l0-24 24 0 174.4 0c-2 3.5-3.6 7.3-4.7 11.4c-.5 2-1 4.1-1.2 6.2c-.1 1.1-.2 2.1-.3 3.2s-.1 2.2-.1 3.3c0 8.7 2.3 16.9 6.4 24l-152.7 0C242.5 467.2 190.5 512 128 512C57.3 512 0 454.7 0 384zm129.7-48L201 221.9c-25.2-23.4-41-56.8-41-93.9C160 57.3 217.3 0 288 0s128 57.3 128 128c0 17-3.3 33.2-9.3 48.1l-44.5-18c3.7-9.2 5.8-19.4 5.8-30c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 28.6 15 53.7 37.6 67.9l20.3 12.7-12.7 20.3L170.4 361.5c-7.8-14.7-23.1-24.8-40.7-25.4zM289.7 176c17.7-.6 32.9-10.7 40.7-25.4l71.3 114.1c14.4-5.6 30-8.6 46.3-8.6c70.7 0 128 57.3 128 128s-57.3 128-128 128c-35.5 0-67.7-14.5-90.8-37.8l34.1-33.8C405.8 455 425.8 464 448 464c44.2 0 80-35.8 80-80s-35.8-80-80-80c-15.6 0-30.1 4.4-42.4 12.1l-20.4 12.8-12.7-20.4L289.7 176z" />
        <path d="M288 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM176 384a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm320 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default Webhook;