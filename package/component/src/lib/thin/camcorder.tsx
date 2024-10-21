
import { Icon } from "../../index";

/**
 * A component that renders the `camcorder` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camcorder?s=thin camcorder}
 * @preview ![camcorder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/camcorder.svg)
 */
const Camcorder: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 104c0-30.9 25.1-56 56-56l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L120 32c-39.8 0-72 32.2-72 72l0 58c-27.6 7.1-48 32.2-48 62L0 416c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-17 0-27.7 0-102.6 0-27.7 0-17c0-35.3-28.7-64-64-64L64 160l0-56zm0 72l256 0c26.5 0 48 21.5 48 48l0 44.7 0 102.6 0 44.7c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-192c0-26.5 21.5-48 48-48zM526.8 445.9L416 396.1l0 17.5 104.3 46.9c5.1 2.3 10.6 3.5 16.2 3.5c21.8 0 39.5-17.7 39.5-39.5l0-209c0-21.8-17.7-39.5-39.5-39.5c-5.6 0-11.1 1.2-16.2 3.5L416 226.4l0 17.5 110.8-49.9c3-1.4 6.3-2.1 9.7-2.1c13 0 23.5 10.5 23.5 23.5l0 209c0 13-10.5 23.5-23.5 23.5c-3.3 0-6.6-.7-9.7-2.1zM64 248c0 4.4 3.6 8 8 8l240 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 240c-4.4 0-8 3.6-8 8z" />
    </Icon>
);

export default Camcorder;