
import { Icon } from "../../index";

/**
 * A component that renders the `snake` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snake?s=solid snake}
 * @preview ![snake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/snake.svg)
 */
const Snake: typeof Icon = x => (
    <Icon {...x}>
        <path d="M483.4 65.7L403.6 25.8c-30.8-15.4-68-9.4-92.3 15L288 64 176 64C96.5 64 32 128.5 32 208s64.5 144 144 144l144 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-63.9 0-.1 0-144.4 0c-10.3 0-20.6 1.7-30.4 4.9l-66 22C6.1 446 0 454.4 0 464s6.1 18 15.2 21.1l66 22c9.8 3.3 20 4.9 30.4 4.9l64.3 0 .1 0 144 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-144 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l112 0 23.2 23.2c24.3 24.3 61.5 30.4 92.3 15l79.8-39.9c17.5-8.8 28.6-26.7 28.6-46.3s-11.1-37.5-28.6-46.3zM352 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Snake;