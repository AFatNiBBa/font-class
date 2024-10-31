
import { Icon } from "../../index";

/**
 * A component that renders the `calendars` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendars?s=thin calendars}
 * @preview ![calendars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/calendars.svg)
 */
const Calendars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216 0c4.4 0 8 3.6 8 8l0 56 160 0 0-56c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56 48 0c35.3 0 64 28.7 64 64l0 48 0 16 0 160c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64l0-160 0-16 0-48c0-35.3 28.7-64 64-64l48 0 0-56c0-4.4 3.6-8 8-8zm-8 120l0-40-48 0c-26.5 0-48 21.5-48 48l0 48 384 0 0-48c0-26.5-21.5-48-48-48l-48 0 0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-40L224 80l0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8zm288 72l-384 0 0 160c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-160zM0 224c0-29.8 20.4-54.9 48-62l0 16.7c-18.6 6.6-32 24.4-32 45.3l0 224c0 26.5 21.5 48 48 48l288 0c20.9 0 38.7-13.4 45.3-32l16.7 0c-7.1 27.6-32.2 48-62 48L64 512c-35.3 0-64-28.7-64-64L0 224z" />
    </Icon>
);

export default Calendars;