
import { Icon } from "../../index";

/**
 * A component that renders the `eye-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-slash?s=sharp-solid eye-slash}
 * @preview ![eye-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/eye-slash.svg)
 */
const EyeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L524 384.1c41.9-44 70.2-93.9 84-128.1C578 181.3 478.4 32 320 32c-66.9 0-123.2 26.6-168.3 63L48.4 14.8zM222.5 150c25.6-23.6 59.9-38 97.5-38c79.5 0 144 64.5 144 144c0 24.7-6.2 47.9-17.1 68.2l-38.7-30.1c5.1-11.7 7.9-24.6 7.9-38.1c0-53-43-96-96-96c-6.4 0-12.7 .6-18.8 1.8l11.6 58.2L222.5 150zM444.9 446.6L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L85.7 163.5C60.2 197.1 42.1 230.8 32 256c30 74.7 129.6 224 288 224c46.9 0 88.6-13.1 124.9-33.4zM324.8 351.9l-99.1-78.1C234 318.3 273.1 352 320 352c1.6 0 3.2 0 4.8-.1z" />
    </Icon>
);

export default EyeSlash;