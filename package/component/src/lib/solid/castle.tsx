
import { Icon } from "../../index";

/**
 * A component that renders the `castle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/castle?s=solid castle}
 * @preview ![castle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/castle.svg)
 */
const Castle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0 0-48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 32 0 0-48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0 0-48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 96 0 112 64 0 0-48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 96 0 192c0 26.5-21.5 48-48 48l-208 0 0-128c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 128L48 512c-26.5 0-48-21.5-48-48L0 272l0-96c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 64 0 0-112 0-96z" />
    </Icon>
);

export default Castle;