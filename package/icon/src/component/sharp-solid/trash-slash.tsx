
import { Icon } from "../../index";

/**
 * A component that renders the `trash-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-slash?s=sharp-solid trash-slash}
 * @preview ![trash-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trash-slash.svg)
 */
const TrashSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M497.3 363.3L512 128l-317.8 0L153 96l391 0 0-64L416 32 400 0 240 0 224 32 96 32l0 19.8-47.6-37L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7-123.6-96zM489.9 482L132.5 200.4 152 512l336 0 1.9-30z" />
    </Icon>
);

export default TrashSlash;