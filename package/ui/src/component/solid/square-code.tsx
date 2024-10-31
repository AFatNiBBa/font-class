
import { Icon } from "../../index";

/**
 * A component that renders the `square-code` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-code?s=solid square-code}
 * @preview ![square-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-code.svg)
 */
const SquareCode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm262.2 71.9c-8.9 9.9-8.1 25 1.8 33.9L324.1 256l-60.2 54.2c-9.9 8.9-10.7 24-1.8 33.9s24 10.7 33.9 1.8l80-72c5.1-4.6 7.9-11 7.9-17.8s-2.9-13.3-7.9-17.8l-80-72c-9.9-8.9-25-8.1-33.9 1.8zm-78.1 33.9c9.9-8.9 10.7-24 1.8-33.9s-24-10.7-33.9-1.8l-80 72c-5.1 4.6-7.9 11-7.9 17.8s2.9 13.3 7.9 17.8l80 72c9.9 8.9 25 8.1 33.9-1.8s8.1-25-1.8-33.9L123.9 256l60.2-54.2z" />
    </Icon>
);

export default SquareCode;