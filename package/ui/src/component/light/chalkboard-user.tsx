
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard-user` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard-user?s=light chalkboard-user}
 * @preview ![chalkboard-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chalkboard-user.svg)
 */
const ChalkboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 32L224 32c-17.7 0-32 14.3-32 32l0 36c-10.2-2.6-21-4-32-4l0-32c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-16 0-160 0-16 0-47.2 0c-5.3-11.4-11.8-22.2-19.5-32l66.7 0 0-48c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 48c17.7 0 32-14.3 32-32l0-288c0-17.7-14.3-32-32-32zM544 384l0-48c0-8.8-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16l0 48 128 0zM224 224A64 64 0 1 0 96 224a64 64 0 1 0 128 0zM64 224a96 96 0 1 1 192 0A96 96 0 1 1 64 224zM32.1 480l255.7 0c-2.8-53.5-47-96-101.2-96l-53.3 0c-54.2 0-98.4 42.5-101.2 96zM0 485.3C0 411.7 59.7 352 133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3z" />
    </Icon>
);

export default ChalkboardUser;