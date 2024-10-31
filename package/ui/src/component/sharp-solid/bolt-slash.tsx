
import { Icon } from "../../index";

/**
 * A component that renders the `bolt-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-slash?s=sharp-solid bolt-slash}
 * @preview ![bolt-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bolt-slash.svg)
 */
const BoltSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M433.4 313.7L528 224 356.7 197.6 416 0 241.8 165 48.4 14.8 29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L433.4 313.7zM112 288l163.6 25.2L171.8 231.4 112 288zm250 93.2l-79.9-63L224 512 362 381.2z" />
    </Icon>
);

export default BoltSlash;