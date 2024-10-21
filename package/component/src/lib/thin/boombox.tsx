
import { Icon } from "../../index";

/**
 * A component that renders the `boombox` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boombox?s=thin boombox}
 * @preview ![boombox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/boombox.svg)
 */
const Boombox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 72l0 88 112 0c0-17.7 14.3-32 32-32s32 14.3 32 32l32 0c0-17.7 14.3-32 32-32s32 14.3 32 32l32 0c0-17.7 14.3-32 32-32s32 14.3 32 32l112 0 0-88c0-30.9-25.1-56-56-56L136 16c-30.9 0-56 25.1-56 56zM64 160l0-88C64 32.2 96.2 0 136 0L504 0c39.8 0 72 32.2 72 72l0 88c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64zm328 16l-48 0-48 0-48 0-48 0L72 176l-8 0c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48l512 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-8 0-128 0-48 0zM224 144c-8.8 0-16 7.2-16 16l32 0c0-8.8-7.2-16-16-16zm192 0c-8.8 0-16 7.2-16 16l32 0c0-8.8-7.2-16-16-16zM304 160l32 0c0-8.8-7.2-16-16-16s-16 7.2-16 16zM176 432a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-208a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM560 336a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-208 0a112 112 0 1 1 224 0 112 112 0 1 1 -224 0z" />
    </Icon>
);

export default Boombox;