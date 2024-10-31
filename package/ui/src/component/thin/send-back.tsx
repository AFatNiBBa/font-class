
import { Icon } from "../../index";

/**
 * A component that renders the `send-back` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-back?s=thin send-back}
 * @preview ![send-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/send-back.svg)
 */
const SendBack: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 16c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48L64 240c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l128 0zM64 0C28.7 0 0 28.7 0 64L0 192c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64L64 0zM576 272c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l128 0zM448 256c-35.3 0-64 28.7-64 64l0 128c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-128 0zM160 288l0 64c0 35.3 28.7 64 64 64l128 0 0-16-128 0c-26.5 0-48-21.5-48-48l0-64-16 0zM416 96L288 96l0 16 128 0c26.5 0 48 21.5 48 48l0 64 16 0 0-64c0-35.3-28.7-64-64-64zm0 96c0-17.7-14.3-32-32-32l-96 0 0 16 96 0c8.8 0 16 7.2 16 16l0 44.8c5.1-2.9 10.4-5.4 16-7.4l0-37.5zM256 336c-8.8 0-16-7.2-16-16l0-44.8c-5.1 2.9-10.4 5.4-16 7.4l0 37.5c0 17.7 14.3 32 32 32l96 0 0-16-96 0z" />
    </Icon>
);

export default SendBack;