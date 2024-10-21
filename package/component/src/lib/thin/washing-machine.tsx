
import { Icon } from "../../index";

/**
 * A component that renders the `washing-machine` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/washing-machine?s=thin washing-machine}
 * @preview ![washing-machine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/washing-machine.svg)
 */
const WashingMachine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 16c26.5 0 48 21.5 48 48l0 384c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l320 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80-32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM351.6 314.3c-14.3 3.4-30.4 5.7-47.6 5.7c-32 0-56-16-80-32s-48-32-80-32c-13.4 0-27.4 2.2-40.7 5.4c17.6-49.7 65-85.4 120.7-85.4c70.7 0 128 57.3 128 128c0 3.5-.1 6.9-.4 10.3zm-2.5 16.9C336.6 388.8 285.3 432 224 432c-70.7 0-128-57.3-128-128c0-8.5 .8-16.8 2.4-24.9c15-4.2 30.9-7.1 45.6-7.1c26.5 0 46.6 13 71.1 29.3l1.2 .8C239.6 317.6 267.1 336 304 336c16.2 0 31.3-1.9 45.1-4.8zM224 448a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </Icon>
);

export default WashingMachine;