
import { Icon } from "../../index";

/**
 * A component that renders the `paintbrush` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paintbrush?s=sharp-solid paintbrush}
 * @preview ![paintbrush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/paintbrush.svg)
 */
const Paintbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 192L512 0l64 64L384 352l-75.3 30.1L193.9 267.3 224 192zm-54.4 96.2L287.8 406.4C284.5 465.3 235.7 512 176 512L0 512l0-64 64 0 0-48c0-59.7 46.7-108.5 105.6-111.8z" />
    </Icon>
);

export default Paintbrush;