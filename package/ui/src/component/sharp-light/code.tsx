
import { Icon } from "../../index";

/**
 * A component that renders the `code` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code?s=sharp-light code}
 * @preview ![code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/code.svg)
 */
const Code: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M381.5 4l-4.7 15.3-144 464L228 498.5l30.6 9.5 4.7-15.3 144-464L412 13.5 381.5 4zM160.7 105.4l-11.7 11L13 244.4 .7 256 13 267.7l136 128 11.7 11 21.9-23.3-11.7-11L47.3 256 171 139.6l11.7-11-21.9-23.3zm296.7 23.9l12 10.6c27.8 24.7 47.5 44 67.4 63.5c0 0 0 0 0 0c16.8 16.4 33.7 32.9 55.5 52.8L469 372.3l-11.7 11 21.9 23.3 11.7-11 136-128 12.7-12L626.6 244c-27.8-24.7-47.5-44-67.4-63.5c0 0 0 0 0 0C539.2 161 519 141.3 490.6 116l-12-10.6-21.3 23.9z" />
    </Icon>
);

export default Code;