
import { Icon } from "../../index";

/**
 * A component that renders the `eye-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-slash?s=sharp-thin eye-slash}
 * @preview ![eye-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/eye-slash.svg)
 */
const EyeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zM608 256c-10.2 25.3-28.3 59.2-54.1 92.9L541.4 339c22.7-29.8 39.3-59.7 49.3-83c-15.2-35.4-45.5-86-89.6-128.5C454.5 82.7 393.8 48 320 48c-41.3 0-78.5 10.9-111.4 28.3L194.9 65.5C231.3 45.1 273 32 320 32c158.4 0 258 149.3 288 224zM86.1 163.1L98.6 173c-22.7 29.8-39.3 59.7-49.3 83c15.2 35.4 45.5 86 89.6 128.5C185.5 429.3 246.2 464 320 464c41.3 0 78.5-10.9 111.4-28.3l13.7 10.8C408.7 466.9 367 480 320 480C161.6 480 62 330.7 32 256c10.2-25.3 28.3-59.2 54.1-92.9zM320 368c7.8 0 15.4-.8 22.7-2.3l-17.5-13.8c-1.7 .1-3.5 .1-5.2 .1c-47.2 0-86.4-34-94.5-78.9L208 259.4C209.8 319.7 259.3 368 320 368zm0-224c-7.8 0-15.4 .8-22.7 2.3l17.5 13.8c1.7-.1 3.5-.1 5.2-.1c47.2 0 86.4 34 94.5 78.9L432 252.6C430.2 192.3 380.7 144 320 144z" />
    </Icon>
);

export default EyeSlash;